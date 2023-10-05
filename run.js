const { exec } = require("child_process");
const path = require("path");

const buildDir = path.join(__dirname, "build");
process.chdir(buildDir);

exec("cmake ..", (error) => {
  if (error) {
    console.error(`Error running cmake: ${error}`);
    return;
  }

  exec("make", (error) => {
    if (error) {
      console.error(`Error running make: ${error}`);
      return;
    }

    exec("./my_program", (error, stdout) => {
      if (error) {
        console.error(`Error running my_program: ${error}`);
        return;
      }
      console.log(stdout);
    });
  });
});
