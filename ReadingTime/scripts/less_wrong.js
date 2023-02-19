const article = document.querySelector(".commentOnSelection");

if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp);
    // matchAll returns an iterator so need to convert to array
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");
    // Use the same styling as the publish information in the article header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    // Support for API reference docs
    const heading = document.querySelector(".PostsPagePostHeader-secondaryInfo");
    // Support for article docs with date
    //const date = article.querySelector(".ToCColumn-header");

    heading.insertAdjacentElement("afterend", badge);
}