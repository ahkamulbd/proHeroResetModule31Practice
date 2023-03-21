document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
});

document.getElementById('center-third').addEventListener('click', function () {
    const third = document.getElementById('third-item');
    third.style.textAlign = 'center';
})

// Adding New Friends:
document.getElementById('add-friend').addEventListener('click', function () {
    const friendsContainer = document.getElementById('friends');

    const newFriend = document.createElement('div');
    newFriend.classList.add('friend');
    newFriend.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>Something New Added</p>
    `;

    friendsContainer.appendChild(newFriend);
})
