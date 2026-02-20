[#macro styleGenerator cssMap]
  [#assign properties = []]
  [#list cssMap?keys as key]
    [#if cssMap[key]?has_content]
      [#assign properties += ["${key}:${cssMap[key]}"]]
    [/#if]
  [/#list]
  ${properties?join("; ")}
[/#macro]

[#assign configStyles = {
  "--object-position": (configuration.focalPointX?has_content && configuration.focalPointY?has_content)?then("${configuration.focalPointX}% ${configuration.focalPointY}%", ""),
  "--min-height": (configuration.minHeight?has_content)?then("${configuration.minHeight}", ""),
  "--aspect-ratio": (configuration.aspectRatio?has_content)?then("${configuration.aspectRatio}", "auto"),
  "--aspect-ratio-md": (configuration.aspectRatioMd?has_content)?then("${configuration.aspectRatioMd}", ""),
  "--aspect-ratio-lg": (configuration.aspectRatioLg?has_content)?then("${configuration.aspectRatioLg}", ""),
  "--aspect-ratio-xl": (configuration.aspectRatioXl?has_content)?then("${configuration.aspectRatioXl}", ""),
  "--blurhash-background-image": (configuration.blurHash?has_content)?then("${configuration.blurHash}", "")
}]

[#-- Namespace is not available in CSS tab for scoping, so using style tag here  --]
<style>
#banner-image-container-${fragmentEntryLinkNamespace} {
  position: relative;
}

#banner-image-container-${fragmentEntryLinkNamespace}:after {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: white;
  background-image: var(--blurhash-background-image, none);
  object-position: var(--object-position, inherit);
  z-index: 0;
}

#banner-image-container-${fragmentEntryLinkNamespace} img {
  position: relative;
  width: 100%;
  min-height: var(--min-height, 100%);
  aspect-ratio: var(--aspect-ratio);
  object-fit: cover;
  object-position: var(--object-position, inherit);
  z-index: 1;
}

@media (min-width: 768px) {
  #banner-image-container-${fragmentEntryLinkNamespace} img {
    aspect-ratio: var(--aspect-ratio-md, var(--aspect-ratio, auto));
  }
}

@media (min-width: 992px) {
  #banner-image-container-${fragmentEntryLinkNamespace} img {
    aspect-ratio: var(--aspect-ratio-lg, var(--aspect-ratio-md, var(--aspect-ratio, auto)));
  }
}

@media (min-width: 1200px) {
  #banner-image-container-${fragmentEntryLinkNamespace} img {
    aspect-ratio: var(--aspect-ratio-xl, var(--aspect-ratio-lg, var(--aspect-ratio-md, var(--aspect-ratio, auto))));
  }
}

#banner-image-container-${fragmentEntryLinkNamespace} video {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
}
</style>

<div id="banner-image-container-${fragmentEntryLinkNamespace}" class="banner-image-container" style="[@styleGenerator cssMap=configStyles /]">
      <img
            src="/documents/20126/0/placeholder.png"
            alt="Placeholder"
            data-lfr-editable-id="my-image"
            data-lfr-editable-type="image"
					 ${(getterUtil.getBoolean(configuration.isAboveTheFold))?then('fetchpriority="high"', "")}
					 />
	[#if configuration.videoLoopUri?? && configuration.videoLoopUri?length > 0]
	  <video preload="meta" muted playsinline autoplay loop src="${configuration.videoLoopUri}" style="object-position:${configuration.focalPointX}% ${configuration.focalPointY}%;"></video>
	[/#if] 
    </div>