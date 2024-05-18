// Interface:
interface programming_language {
    ts:string;
}

interface programming_language{
    js:string;
}

let programming : programming_language={
    ts:"TypeScript",
    js:"JavaScript"
}

console.log("\n",programming.js);
console.log(programming["ts"]);
