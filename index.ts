// Array.from(document.querySelectorAll("p")).map((p)=>p.innerText).join(" ").replace(/(\r\n|\n|\r)/gm, "").replace(/\[\d+\]/gm,"")
const str = ``;
console.log(
  Array.from(getSentences(str.replace(/\n/g, " ")))
    .sort((a, b) => b.segment.length - a.segment.length)
    .slice(0, 5)
    .map((x) => x.segment)
    .join("\n\n")
);
function getSentences(text: string, locale = "en") {
  const segmenter = new Intl.Segmenter(locale, { granularity: "sentence" });

  return segmenter.segment(text);
}
