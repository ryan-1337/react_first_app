export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand text-uppercase mx-auto mx-0" href="#">good night</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item text-end">
                            <button type="button" class="btn btn-secondary me-3">
                                <a class="nav-link" href="#">Connexion</a>
                            </button>
                        </li>
                        <li class="nav-item text-end">
                            <button type="button" class="btn btn-primary">
                                <a class="nav-link" href="#">Inscription</a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}