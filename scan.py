import os
import re

video_root = "assets/videos"

for folder in sorted(os.listdir(video_root)):
    folder_path = os.path.join(video_root, folder)
    if not os.path.isdir(folder_path):
        continue
    files = sorted(os.listdir(folder_path))
    print(f"\n{folder}/")
    for f in files:
        print(f"  {f}")