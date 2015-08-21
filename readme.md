# Knockout.Cropper

A binding for knockout 3+ to allow you to to crop images using the great [jquery cropper](https://github.com/fengyuanchen/cropper) library.

## Installing

Add knockout-3*.js to your project, then jquery, cropper and finally knockout.cropper.js to your project, you will probably want
the cropper css files too.

## Example

A simple example of using markdown to generate outputs:
```
<img id="some-image-to-crop" data-bind="cropper: { aspectRatio: 16/9 }" />
```

### cropper binding

The binding wraps the cropper options 1:1 so you can just pass in whatever options you want listed [here] (https://github.com/fengyuanchen/cropper)

### More Examples with Source Code

Here is an example of what it does and how to use it.
[View Example](https://rawgithub.com/grofit/knockout.cropper/master/example.html)