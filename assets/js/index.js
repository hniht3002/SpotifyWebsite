const lists = document.querySelector(".lists");
/* contentContainer.insertAdjacentHTML("beforeend", "<h1>Hello1</h1>");
contentContainer.insertAdjacentHTML("beforeend", "<h1>Hello2</h1>"); */

const app = {
  playlists: [
    {
      id: 1,
      heading: "Focus",
      items: [
        {
          image: "./assets/img/focus/img1.jfif",
          title: "Peaceful Piano",
          desc: "Relax and indulge with beautiful piano pieces",
        },
        {
          image: "./assets/img/focus/img2.jfif",
          title: "Deep Focus",
          desc: "Keep calm and focus with ambient and post-rock music.",
        },
        {
          image: "./assets/img/focus/img3.jfif",
          title: "Instrumental Study",
          desc: "Focus with soft study music in the background.",
        },
        {
          image: "./assets/img/focus/img4.jfif",
          title: "chill lofi study beats",
          desc: "The perfect study beats. Find your focus, crush your productivity.",
        },
        {
          image: "./assets/img/focus/img5.jfif",
          title: "Coding Mode",
          desc: "Dedicated to all the programmers out there.",
        },
      ],
    },
    {
      id: 2,
      heading: "Spotify Playlists",
      items: [
        {
          image: "./assets/img/playlist/img1.jfif",
          title: "Today's Top Hits",
          desc: "Meghan Trainor is on top of the Hottest 50!",
        },
        {
          image: "./assets/img/playlist/img2.jfif",
          title: "RapCaviar",
          desc: "New music from Metro Boomin, Latto and Nas & 21 Savage.",
        },
        {
          image: "./assets/img/playlist/img3.jfif",
          title: "Rock Classics",
          desc: "Rock legends & epic songs that continue to inspire generations. Cover: Guns N' Roses",
        },
        {
          image: "./assets/img/playlist/img4.jfif",
          title: "chill lofi study beats",
          desc: "The perfect study beats. Find your focus, crush your productivity.",
        },
        {
          image: "./assets/img/playlist/img5.jfif",
          title: "Chill Hits",
          desc: "Kick back to the best new and recent chill hits.",
        },
      ],
    },
  ],

  render: function () {
    let _items = [];

    /* Append Items To _items */
    this.playlists.forEach((playlist) => {
      playlist.items.forEach((item, index) => {
        console.log(item);
        _items.push(`
        <div class="col-xl col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
          <div class="item-wrapper">
            <div class="item">
              <div class="image">
                <img
                  src="${item.image}"
                  alt=""
                  class="img"
                />
                <div class="play-btn">
                  <svg
                    role="img"
                    height="24"
                    width="24"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="detail">
                <h6 class="title">${item.title}</h6>
                <p class="desc">${item.desc}</p>
              </div>
            </div>
          </div>
        </div>
        `);
      });
    });

    /* Add Items into row */
    const htmls = this.playlists.map((playlist, index) => {
      let output = "";
      const itemsQuantity = playlist.items.length;
      for (var i = 0; i < itemsQuantity; i++) {
        output += `${_items[i]}`;
      }

      _items.splice(0, itemsQuantity);

      return `
              <div class="list">
                <div class="list-header">
                  <p class="list-heading">${playlist.heading}</p>
                  <p class="list-show-all">Show all</p>
                </div>
                <div
                  class="row g-2 overflow-hidden mt-2 set-height-item justify-content-center hide-item-overflow"
                >
                  ${output}
                </div>
              </div>
      
      `;
    });

    lists.innerHTML = htmls.join("");
  },

  start: function () {
    this.render();
  },
};

app.start();
