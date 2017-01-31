# Image compression

TODO:// [Test imageAlpha](https://pngmini.com)

2017-01-28 

These tests aim to compare the perceived quality and the image size by using different software compression applications.

I have tested the following 

- JPEGmini v1.9.9 (build 119)
- [ImageOptim v1.6.5](https://imageoptim.com/mac)

Summary comparison table using an original iPhone 7+ photo (4032 x 3024)

|File                        |    Size      |
|----------------------------|--------------|
|Orignal Image 4032 x 3024   | 2 097 KB     |
|JPEGmini                    | 1 365 KB     |
|_ImageOtim - insane / lossy_|              |
|ImageOptim 100% Quality     | 1 953 KB     | 
|ImageOptim 70% Quality      |   604 KB     |
|ImageOptim 40% Quality      |   324 KB     |
|_ImageOtim - fast / lossy_ (*) |              |
|ImageOptim 100% Quality     | 1 953 KB     | 
|ImageOptim 70% Quality      |   604 KB     |
|ImageOptim 40% Quality      |   324 KB     |

(*) The speed setting isn't working given that we are getting the same file sizes

Summary comparison table using an iPhone 7+ photo scaled to the iPad Pro 12.9" screen pixels (2732 x 2049)

|File                        |    Size      |
|----------------------------|--------------|
|Orignal Image 2732 x 2049   | 1 058 KB     |
|JPEGmini                    |   639 KB     |
|_ImageOtim - insane / lossy_|              |
|ImageOptim 100% Quality     |   932 KB     | 
|ImageOptim 70% Quality      |   318 KB     |
|ImageOptim 40% Quality      |   172 KB     |


Summary comparison table using an iPhone 7+ photo scaled to the screen pixels (1440 x 1080)

|File                        |    Size      |
|----------------------------|--------------|
|Orignal Image 1440 x 1080   |   319 KB     |
|JPEGmini                    |   181 KB     |
|_ImageOtim - insane / lossy_|              |
|ImageOptim 100% Quality     |   297 KB     | 
|ImageOptim 70% Quality      |   100 KB     |
|ImageOptim 40% Quality      |    46 KB     |


Required space to store 1000 photos

|File                        | 1 000 photos | 10 000 photos  | 100 000 photos |
|----------------------------|--------------|----------------|----------------|
|Orignal Image 4032 x 3024   | 2.1 GB       | 20.9 GB        |   209 GB       |
|JPEGmini                    | 1.4 GB       | 13.7 GB        |   137 GB       |
|ImageOptim 100% Quality     | 1.9 GB       | 19.5 GB        |   195 GB       | 
|ImageOptim 70% Quality      | 604 MB       | 6.04 MB        |    60 GB       |
|ImageOptim 40% Quality      | 324 MB       | 3.24 MB        |    32 GB       |
|                            |              |                |                |
|Orignal Image 2732 x 2049   | 1.0 GB       | 10.6 GB        |   100 GB       |
|JPEGmini                    | 639 MB       | 6.39 GB        |    63 GB       |
|ImageOptim 100% Quality     | 932 MB       | 9.32 GB        |    93 GB       | 
|ImageOptim 70% Quality      | 318 MB       | 3.18 GB        |    31 GB       |
|ImageOptim 40% Quality      | 172 MB       | 1.72 GB        |    17 GB       |
|                            |              |                |                |
|Orignal Image 1440 x 1080   | 319 MB       | 3.19 GB        |    32 GB       |
|JPEGmini                    | 181 MB       | 1.81 GB        |    18 GB       |
|ImageOptim 100% Quality     | 297 MB       | 2.97 GB        |    29 GB       | 
|ImageOptim 70% Quality      | 100 MB       | 1.00 GB        |    10 GB       |
|ImageOptim 40% Quality      |  46 MB       |  460 MB        |    4.6 GB      |


## Side by side comparison

![Original Image](assets/_media_comparison.png)

## Individual Photos, original size

![Original Image](assets/_media_originalSize_IMG_0366.jpg)
![JPEGmini Image](assets/_media_originalSize_IMG_0366_JPEGmini.jpg)
![Image Optim 100 - insane](assets/_media_originalSize_IMG_0366_imageOptim_100_insane.jpg)
![Image Optim 70 - insane](assets/_media_originalSize_IMG_0366_imageOptim_70_insane.jpg)
![Image Optim 40 - insane](assets/_media_originalSize_IMG_0366_imageOptim_40_insane.jpg)
![Image Optim 100 - fast](assets/_media_originalSize_IMG_0366_imageOptim_100_fast.jpg)
![Image Optim 70 - fast](assets/_media_originalSize_IMG_0366_imageOptim_70_fast.jpg)
![Image Optim 40 - fast](assets/_media_originalSize_IMG_0366_imageOptim_40_fast.jpg)

## Individual Photos, iPad Pro 12.9" size

![Original Image](assets/_media_iPadProSize_IMG_0366.jpg)
![JPEGmini Image](assets/_media_iPadProSize_IMG_0366_JPEGmini.jpg)
![Image Optim 100 - insane](assets/_media_iPadProSize_IMG_0366_imageOptim_100_insane.jpg)
![Image Optim 70 - insane](assets/_media_iPadProSize_IMG_0366_imageOptim_70_insane.jpg)
![Image Optim 40 - insane](assets/_media_iPadProSize_IMG_0366_imageOptim_40_insane.jpg)

## Individual Photos, iPhone7 Plus Sizes

![Image Optim 100 - insane](assets/_media_iPhone7PlusSize_IMG_0366_imageOptim_100_insane.jpg)
![Image Optim 70 - insane](assets/_media_iPhone7PlusSize_IMG_0366_imageOptim_70_insane.jpg)
![Image Optim 40 - insane](assets/_media_iPhone7PlusSize_IMG_0366_imageOptim_40_insane.jpg)


