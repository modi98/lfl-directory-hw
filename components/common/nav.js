const loadNav = function () {
  document.getElementById('nav').innerHTML = `
    <div id="desktopNav">
      <a href="/" class="navlink">View</a>
      <a href="/components/add/add.html" class="navlink">Add</a>
      <a href="/" class="navlink">Verify</a>
      <a href="/" class="navlink">Update</a>
      <a href="/" class="navlink">Delete</a>
    </div>

    <div id="mobileNav">
      <a href="/" class="navlink">View</a>
      <a href="/components/add/add.html" class="navlink">Add</a>
      <a href="/" class="navlink">Verify</a>
      <a href="/" class="navlink">Update</a>
      <a href="/" class="navlink">Delete</a>
    </div>
    `;
}