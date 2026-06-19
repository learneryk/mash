const person = {
    fullName: "Sarah Johnson",
    welcomeMsg: "Welcome to the new platform! hope you enjoy",
    displayDetails: function () {
       console.log(this.fullName[0]);
       console.log(this.welcomeMsg.length)
       console.log(this.welcomeMsg.slice(0,16))
       console.log(this.welcomeMsg.substring(0, 16))
       console.log(this.fullName.toUpperCase())
       console.log(this.welcomeMsg.toLowerCase())
       console.log(this.welcomeMsg.trim())
       console.log(this.fullName.split(" "))
       console.log(this.welcomeMsg.search(/welcome/i))
       console.log(`${this.fullName}, ${this.welcomeMsg}`)
    }
}


person.displayDetails()