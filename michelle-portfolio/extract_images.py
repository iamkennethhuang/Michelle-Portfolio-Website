import fitz
import os

doc = fitz.open(r'C:\Users\kenne\Documents\Project\Michelle-Portfolio-Website\Copy by Michelle.pdf')
out_dir = r'C:\Users\kenne\Documents\Project\Michelle-Portfolio-Website\pdf_images'
os.makedirs(out_dir, exist_ok=True)
count = 0
seen_xrefs = set()

for page_num, page in enumerate(doc):
    for img_index, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        if xref in seen_xrefs:
            continue
        seen_xrefs.add(xref)
        base_image = doc.extract_image(xref)
        img_bytes = base_image['image']
        ext = base_image['ext']
        w = base_image['width']
        h = base_image['height']
        fname = f'p{page_num+1:02d}_img{img_index+1:02d}_{w}x{h}.{ext}'
        with open(f'{out_dir}/{fname}', 'wb') as f:
            f.write(img_bytes)
        count += 1
        print(f'Page {page_num+1}, img {img_index+1}: {fname}')

print(f'Total: {count} unique images')
