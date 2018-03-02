var people = Array();
function createPeople() {
    var newPerson;
    for (var i = 0; i < 10; i++) {
        newPerson = {
            name: "Emanuel " + i,
            email: "j" + i + "@gmail.com",
            salary: (i + 100000),
            active: i % 2 == 0 ? true : false
        };
        people.push(newPerson);
    }
    var lastPerson;
    for (var i = 0; i < 5; i++) {
        lastPerson = {
            name: "Emanuel " + i + " ",
            email: "algo.com",
            salary: (i + 2000),
            active: true
        };
    }
    people.push(lastPerson);
}
function chida() {
    people.forEach(function (element) {
        var email = false;
        var a = element.email.split('');
        for (var i = 0; i < a.length; i++) {
            if (a[i] == '@')
                email = true;
        }
        if (element.active && email)
            console.log(element);
    });
}
createPeople();
chida();
