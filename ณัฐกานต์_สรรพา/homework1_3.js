function newGang(arr) {
  const newGang = arr
    .filter((item) => {
      return item.friends.length >= 2;
    })
    .map((item) => {
      return {
        name: item.name,
        genger: item.gender,
        email: item.email,
        company: item.company,
        balance: parseFloat(item.balance.substring(1, item.balance.length).split(",").join("")) / 10,
        friends: item.friends,
      };
    });
  console.log("newGang :", newGang);
}

async function FriendData(allFriendData) {
  const url = "https://dev.codekit.co/devcamp-api/friends.txt";
  try {
    const response = await axios.get(url);
    console.log(response);
    let allFriendData = response.data;
    console.log("allFriendData :", allFriendData);
    newGang(allFriendData);
    return;
  } catch (error) {
    console.error(error);
  }
}
FriendData();
