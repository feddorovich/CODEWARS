function findNeedle(haystack) {
    needle = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            needle = haystack.indexOf("needle");
            return `found the needle at position ${needle}`
        }
    }
}

/*
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
 */