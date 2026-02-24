# Liferay Editor Custom Fields - Image Enhancements

Adds focal point and blurhash to Images in Liferay Structured Web Content and Fragments

![](./docs/screenshots/1-fields.png)

![](./docs/screenshots/2-focal-point-content.mp4)

![](./docs/screenshots/3-focal-point-fragment.mp4)

![](./docs/screenshots/4-blurhash-with-video.mp4)

![](./docs/screenshots/5-responsive-aspect-ratio.mp4)

## Supported Liferay Versions
This app supports DXP versions in their premium support phase at the time of this release.
- 2025 Q4
- 2025 Q3
- 2025 Q2
- 2025 Q1
- 2024 Q1
- 7.4

If you need compatibility for older DXP releases, you can create a legacy version with a year that supports the release, and submit a PR.

## Getting Started

This is meant to be imported into a client extension. Since this is the first app using the framework, it's already included as an example.

- In a terminal, navigate to your Liferay workspace's _client-extensions_ folder
- Clone the client extension into your folder using `git clone git@github.com:lbeharxtivia/liferay-editor-custom-fields-client-extension.git`
- Run `blade gw clean deploy` to deploy your new client extension

## Creating Liferay Content/Fragments with the provided files

A web content structure, web content template, fragment config, and fragment HTML have been provided for you at https://github.com/lbeharxtivia/liferay-editor-custom-fields-image-enhancements/tree/7.4/docs. Use those to create structured Web Content and Fragments respectively.

## License

MIT Licensed. Copyright (c) Xtivia 2026.
