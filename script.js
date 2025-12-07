class Abonent {
   constructor(bar) {
      this.name = bar.name;
      this.phone = bar.phone;
   }

   firstName = "";
   lastName = "";
   Phone = "";

   set name(newName) {
      const nameRow = newName.split(" ");
      this.firstName = nameRow[0];
      this.lastName = nameRow[1];
   }
   set phone(value) {
      const phoneRow = value;
      this.Phone = phoneRow;
   }

   get name() {
      return this.firstName, this.lastName;
   }
   get phone() {
      return this.phone;
   }
}

const Zhenia = new Abonent({
   name: "Evgeniy Kamenetskiy",
   phone: "0976223258",
});

console.log(Zhenia);