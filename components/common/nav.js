const loadNav = function () {
  document.getElementById('nav').innerHTML = `
    <div id="desktopNav">
      <a href="/" class="navlink">View</a>
      <a href="/components/add/add.html" class="navlink">Add</a>
      <a href="/components/verify/verify.html" class="navlink">Verify</a>
      <a href="/components/update/update.html" class="navlink">Update</a>
      <a href="/" class="navlink">Delete</a>
    </div>

    <div id="mobileNav">
      <a href="/" class="navlink">View</a>
      <a href="/components/add/add.html" class="navlink">Add</a>
      <a href="/components/verify/verify.html" class="navlink">Verify</a>
      <a href="/components/update/update.html" class="navlink">Update</a>
      <a href="/" class="navlink">Delete</a>
    </div>
    `;
}