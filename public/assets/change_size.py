
from PIL import Image
import os

# Set the directory containing the images
image_directory = "./Icons"

# Set the desired size
target_size = (256, 256)

# Loop through each file in the directory
for filename in os.listdir(image_directory):
    if filename.endswith(".jpg") or filename.endswith(".png"):
        # Open the image
        image_path = os.path.join(image_directory, filename)
        image = Image.open(image_path)
        
        # Resize the image
        resized_image = image.resize(target_size)
        
        # Save the resized image, overwrite the original file
        resized_image.save(image_path)
