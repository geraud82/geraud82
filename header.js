const appHeader =`<div class="container-fluid">
<nav class="navbar navbar-expand-lg bg-primaary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img  class="logokadnosa"  src="kadnologo.jpeg"> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-center ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Acceuil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Services.html">Nos Services</a>
        </li><li class="nav-item">
          <a class="nav-link active" aria-current="page" href="blogs.html">Nos Articles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="contact.html">Contacts</a>
        </li> 
        
      </ul>
     
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>`;
document.getElementById("headerApp").innerHTML = appHeader;