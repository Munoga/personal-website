async function greet() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(()=> {resolve("Hello"),1000})})
      let results = await promise
      console.log(results)
}
greet()