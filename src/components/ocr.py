import pytesseract as pyt
import cv2

img=cv2.imread("text_img.png")

pyt.pytesseract.tesseract_cmd = 