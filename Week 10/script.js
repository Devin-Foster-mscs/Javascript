"use strict";
 let output = document.getElementById("output");

 let property = {
    name: "Pleasent Apartments",
    address: "99 West Grove",
    built: 1977,
    createdBy: {
        builtBy: "Cameron's Constrution",
        owners: ["Barry B. Benson", "Will Ferral"]
    },
};
// notice properties can be null or array
output.innerHTML = "<p>Property name = "+property.name;
output.innerHTML += "<p>Property address = "+property.address;
output.innerHTML += "<p>Year built = "+property.built;
output.innerHTML += "<p>Building constructor = "+property.createdBy.builtBy;
output.innerHTML += "<p>Building owners = "+property.createdBy.owners;

function Property(name, year) {
    this.name = name;
    this.year = year;
    this.ageOfBuilding = function() {
        let today = new Date();
        let yyyy = today.getFullYear();
        let age = yyyy - this.year;
        return "<p>"+this.name+" is "+age+" years old";
    };
}

let apartment1 = new Property("Apartment #101",1977);
let apartment2 = new Property("Apartment #102",1977);
let apartment3 = new Property("Apartment #103",1977);

output.innerHTML += apartment1.ageOfBuilding();
output.innerHTML += apartment2.ageOfBuilding();
output.innerHTML += apartment3.ageOfBuilding();

function oldestTenant(name, year) {
    this.name = name;
    this.year = year;

    function getAge() { // private function
        let today = new Date();
        let yyyy = today.getFullYear();
        let age = yyyy - year;
        return age;
    }

    this.tenantAge = function() { // public and privileged
        return "<p>Oldest tenant "+this.name+" is "+getAge()+" years old"
    }
    this.getTheAge = function() {
        return "<p>" + getAge() + "</p>";
    }
}

let tenant1 = new oldestTenant("Earl", 1910);

output.innerHTML += tenant1.tenantAge();
output.innerHTML += tenant1.getTheAge();


function yearMovedIn() {
    this.yearMoved = null
    this.getFullYear = function () {
        return this.yearMoved;
    }
}
function Apartment() {
    this.apartmentNumber = null;
    // this.title = null;
    this.getApartment = function () {
        return this.apartmentNumber;
    }
}
function Earl(name) {
    this.Earl = name;
    // this.title = null;
    // this.genre = null;
    let ap = new Apartment();
    this.getName = function () {
        return this.Earl+" "+ap.getApartment()+"<p>";
    }
}

Earl.prototype.yearMoved = new yearMovedIn();
Apartment.prototype.apart = new Apartment();


let buildingResident = new Earl("Earl");
buildingResident.yearMoved;

buildingResident.Apartment = "101";
buildingResident.yearMoved = "1977";
output.innerHTML += buildingResident.getName();



 output.innerHTML += "<p>"//;