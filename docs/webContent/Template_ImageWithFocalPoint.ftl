<#assign articleId = .vars["reserved-article-id"].data />

<#macro responsiveAspectRatio breakpoint value>
  <#if (value?has_content && value != '[]')>
    @media (min-width: ${breakpoint}px) {
      .image-container-${articleId} img {
        aspect-ratio: ${value};
      }
    }
  </#if>
</#macro>

<style>
.image-container-${articleId} {
  position: relative;
}

.image-container-${articleId}:after {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: white;
  background-image: var(--blurhash-background-image, none);
  object-position: var(--blurhash-object-position, inherit);
  z-index: 0;
  transition: opacity 300ms ease-in-out;
}

.image-container-${articleId} img {
  position: relative;
  width: 100%;
  object-fit: cover;
  z-index: 1;
  <#if (aspectRatio.getData()?has_content && aspectRatio.getData()?string != '[]')>
    aspect-ratio: ${aspectRatio.getData()};
  <#else>
    aspect-ratio: 16/9;
  </#if>
}

<#-- Using the macro for responsive overrides -->
<@responsiveAspectRatio breakpoint="768"  value=aspectRatioMd.getData() />
<@responsiveAspectRatio breakpoint="992"  value=aspectRatioLg.getData() />
<@responsiveAspectRatio breakpoint="1200" value=aspectRatioXl.getData() />

.image-container-${articleId} video {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
</style>

<#if (contentImage.getData())?? && contentImage.getData() != "">
  <#assign focalPoint = "${FocalPointX.getData()}% ${FocalPointY.getData()}%">
  
  <div class="image-container-${articleId}" 
       style="width:100%; max-width:var(--container-max-xl); --blurhash-object-position:${focalPoint}; --blurhash-background-image:${Text95780715.getData()};">
    
    <img data-aspect="${aspectRatio.getData()}" 
         alt="${htmlUtil.escapeAttribute(contentImage.getAttribute("alt"))}" 
         data-fileentryid="${contentImage.getAttribute("fileEntryId")}" 
         src="${contentImage.getData()}"  
         style="width:100%; object-fit:cover; object-position:${focalPoint};"
				 ${getterUtil.getBoolean(isAboveTheFold.getData())?then('fetchpriority="high"', "")}

    />

    <#if ((videoLoopUri.getData())?? && (videoLoopUri.getData()?length > 0))>
      <video preload="meta" muted playsinline autoplay loop 
             src="${videoLoopUri.getData()}" 
             style="object-position:${focalPoint};">
      </video>
    </#if>
  </div>
</#if>