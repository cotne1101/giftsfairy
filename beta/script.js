document.getElementById("giftForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const recipient = document.getElementById("recipient").value;
  const occasion = document.getElementById("occasion").value;
  const budget = parseInt(document.getElementById("budget").value);
  const interests = document.getElementById("interests").value;

  const gifts = [
    {
      name: "Customized Mug",
      keywords: ["mug", "custom", "personalized"],
      price: 15,
    },
    {
      name: "Gift Card",
      keywords: ["gift card", "voucher"],
      price: 25,
    },
    {
      name: "Indoor Plant",
      keywords: ["plant", "indoor plant", "green"],
      price: 20,
    },
    {
      name: "ჟირაფი ჟოზე",
      keywords: ["სათამაშო", "ცხოველი", "ჟირაფი", "ყვითელი","სიმღერა","ქრაში"],
      price: 50,
    },
    // Add more gift options here...
  ];

  const suggestedGifts = gifts.filter(gift => {
    const matchingKeywords = gift.keywords.filter(keyword =>
      interests.toLowerCase().includes(keyword)
    );
    return matchingKeywords.length > 0 && gift.price <= budget;
  });

  if (suggestedGifts.length > 0) {
    const randomIndex = Math.floor(Math.random() * suggestedGifts.length);
    const suggestedGift = suggestedGifts[randomIndex].name;

    document.getElementById("suggestedGift").innerText = suggestedGift;
    document.getElementById("giftResult").classList.remove("hidden");
  } else {
    document.getElementById("suggestedGift").innerText = "No suitable gifts found.";
    document.getElementById("giftResult").classList.remove("hidden");
  }

  // Remove existing gift icons before adding new ones
  const existingGiftIcons = document.querySelectorAll(".gift-icon");
  existingGiftIcons.forEach(icon => icon.remove());

  // Add floating gift icons to the background
  const numGifts = 100; // Number of gift icons to add
  for (let i = 0; i < numGifts; i++) {
    addGiftIcon();
  }
});

function addGiftIcon() {
  const giftIcon = document.createElement("div");
  giftIcon.innerHTML = '<span class="gift-icon"><i class="fas fa-gift"></i></span>';
  giftIcon.classList.add("gift-icon");
  giftIcon.style.left = `${Math.random() * 100}%`;
  giftIcon.style.animationDuration = `${Math.random() * 5 + 5}s`;
  document.querySelector(".background-container").appendChild(giftIcon);
}

// Add initial floating gift icons on page load
const numGifts = 100; // Number of gift icons to add initially
for (let i = 0; i < numGifts; i++) {
  addGiftIcon();
}
