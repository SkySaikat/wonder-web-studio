"""Render public previews from the actual PDF covers, with content-addressed URLs.

Changing a cover must change its URL: Next Image and CDN caches can otherwise
keep showing an earlier illustration after the PDF itself has been rebuilt.
"""
from hashlib import sha256
from io import BytesIO
from pathlib import Path
import json

import pymupdf
from PIL import Image


def render_guide_cover(root: Path, slug: str) -> str:
    with pymupdf.open(root / 'private/guides' / (slug + '.pdf')) as document:
        pixmap = document[0].get_pixmap(matrix=pymupdf.Matrix(1.2, 1.2), alpha=False)
    image = Image.frombytes('RGB', (pixmap.width, pixmap.height), pixmap.samples)
    buffer = BytesIO()
    image.save(buffer, 'WEBP', quality=88)
    content = buffer.getvalue()
    filename = f'{slug}-cover-{sha256(content).hexdigest()[:12]}.webp'
    destination = root / 'public/guides' / filename
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_bytes(content)
    return '/guides/' + filename


if __name__ == '__main__':
    root = Path(__file__).resolve().parents[1]
    catalog_path = root / 'src/data/download-guides.json'
    catalog = json.loads(catalog_path.read_text(encoding='utf8'))
    for guide in catalog:
        guide['cover'] = render_guide_cover(root, guide['slug'])
    catalog_path.write_text(json.dumps(catalog, indent=2) + '\n', encoding='utf8')
    print(f'Rendered {len(catalog)} distinct PDF cover previews with content-addressed URLs.')
