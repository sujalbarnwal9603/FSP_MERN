CONST FS=REQUIRE("FS")
console.log("First")
const data=fs.readFileSync("college.txt", "utf8")
IF(ERR){
    THROW ERR;
}
console.log(data);
console.log("File read successfully");


const fs=require("fs")
console.log("Start")
const value="Hello dear all.\n This is class on mern stack";
fs.writeFileSync("greetings.txt", value, "utf8")
console.log("File written successfully");



const fs=require("fs")
console.log("Start")
const value="Hello dear all.\n This is class on mern stack";
fs.writeFile("greetings.txt", value, "utf8")
if(err)
{
    throw err;
}
console.log("File written successfully");


const fs=require("fs")

console.log("Start");
const value="\n This is appended text.";
fs.appendFile("greetings.txt", value, "utf8", (err)=>{
    if(err){
        throw err;
    }
    console.log("File appended successfully");
});
const fs=require("fs")
console.log("Start")
fs.unlink("greetings.txt", (err)=>{
    if(err){
        throw err;
    }
    console.log("File deleted successfully");
});
const fs=require("fs")
console.log("Start")
fs.rename("greetings.txt", "welcome.txt", (err)=>{
    if(err){
        throw err;
    }
    console.log("File renamed successfully");
});
const fs=require("fs")
console.log("Start")
fs.stat("welcome.txt", (err, stats)=>{
    if(err){
        throw err;
    }
    console.log(stats);
    console.log("File information retrieved successfully");
}
);

