"use strict";

let bookedRooms = document.querySelector(".booked-rooms");
let bookBtn = document.querySelectorAll(".book-room button");
let bookedArr = [];

// book a room
bookBtn.forEach((btn) => {
  btn.onclick = function () {
    let addRoom = `
        <div class="booked-room">
            <div class="booked-room-info">
                <img
                src="http://themes.quitenicestuff2.com/sohohotel/demo1/wp-content/uploads/2021/09/38-6-1470x920.jpg"
                alt=""
                />
            <div>
            <h3>Deluxe Queen Room</h3>
            <p>1 Night</p>
            </div>
        </div>
            <p class="room-price">$400</p>
        </div>
        <button class="remove-booked-btn">Remove</button>
    `;
    let div = document.createElement("div");
    div.className = "booked-room-container";
    div.innerHTML = addRoom;
    div.id = bookedArr.length;
    if (!bookedArr.includes(div)) {
      bookedArr.push(div);
      bookedRooms.append(div);
    }
  };
});
