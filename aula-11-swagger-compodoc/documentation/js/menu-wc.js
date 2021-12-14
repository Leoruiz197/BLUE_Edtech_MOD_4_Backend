'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">aula-11-swagger-compodoc documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-a08dad641195fcc2204ea7f47b26943396b1d355957c004e67a511f10453c2342d71b6e0f31f313b9f1049ccb48a219104363bd94470be2e6feb9fc48b4e1e65"' : 'data-target="#xs-controllers-links-module-AppModule-a08dad641195fcc2204ea7f47b26943396b1d355957c004e67a511f10453c2342d71b6e0f31f313b9f1049ccb48a219104363bd94470be2e6feb9fc48b4e1e65"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-a08dad641195fcc2204ea7f47b26943396b1d355957c004e67a511f10453c2342d71b6e0f31f313b9f1049ccb48a219104363bd94470be2e6feb9fc48b4e1e65"' :
                                            'id="xs-controllers-links-module-AppModule-a08dad641195fcc2204ea7f47b26943396b1d355957c004e67a511f10453c2342d71b6e0f31f313b9f1049ccb48a219104363bd94470be2e6feb9fc48b4e1e65"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-a08dad641195fcc2204ea7f47b26943396b1d355957c004e67a511f10453c2342d71b6e0f31f313b9f1049ccb48a219104363bd94470be2e6feb9fc48b4e1e65"' : 'data-target="#xs-injectables-links-module-AppModule-a08dad641195fcc2204ea7f47b26943396b1d355957c004e67a511f10453c2342d71b6e0f31f313b9f1049ccb48a219104363bd94470be2e6feb9fc48b4e1e65"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a08dad641195fcc2204ea7f47b26943396b1d355957c004e67a511f10453c2342d71b6e0f31f313b9f1049ccb48a219104363bd94470be2e6feb9fc48b4e1e65"' :
                                        'id="xs-injectables-links-module-AppModule-a08dad641195fcc2204ea7f47b26943396b1d355957c004e67a511f10453c2342d71b6e0f31f313b9f1049ccb48a219104363bd94470be2e6feb9fc48b4e1e65"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilmesModule.html" data-type="entity-link" >FilmesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FilmesModule-0ea7c40307d8a4f28ab12805e06abb1214502ac46c89a9114435b4e286a8dc49fba140cd89a06e1c36f3156b478d0c9be0447a194543b203ed33c3f8c3eb814f"' : 'data-target="#xs-controllers-links-module-FilmesModule-0ea7c40307d8a4f28ab12805e06abb1214502ac46c89a9114435b4e286a8dc49fba140cd89a06e1c36f3156b478d0c9be0447a194543b203ed33c3f8c3eb814f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilmesModule-0ea7c40307d8a4f28ab12805e06abb1214502ac46c89a9114435b4e286a8dc49fba140cd89a06e1c36f3156b478d0c9be0447a194543b203ed33c3f8c3eb814f"' :
                                            'id="xs-controllers-links-module-FilmesModule-0ea7c40307d8a4f28ab12805e06abb1214502ac46c89a9114435b4e286a8dc49fba140cd89a06e1c36f3156b478d0c9be0447a194543b203ed33c3f8c3eb814f"' }>
                                            <li class="link">
                                                <a href="controllers/FilmesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilmesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FilmesModule-0ea7c40307d8a4f28ab12805e06abb1214502ac46c89a9114435b4e286a8dc49fba140cd89a06e1c36f3156b478d0c9be0447a194543b203ed33c3f8c3eb814f"' : 'data-target="#xs-injectables-links-module-FilmesModule-0ea7c40307d8a4f28ab12805e06abb1214502ac46c89a9114435b4e286a8dc49fba140cd89a06e1c36f3156b478d0c9be0447a194543b203ed33c3f8c3eb814f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilmesModule-0ea7c40307d8a4f28ab12805e06abb1214502ac46c89a9114435b4e286a8dc49fba140cd89a06e1c36f3156b478d0c9be0447a194543b203ed33c3f8c3eb814f"' :
                                        'id="xs-injectables-links-module-FilmesModule-0ea7c40307d8a4f28ab12805e06abb1214502ac46c89a9114435b4e286a8dc49fba140cd89a06e1c36f3156b478d0c9be0447a194543b203ed33c3f8c3eb814f"' }>
                                        <li class="link">
                                            <a href="injectables/FilmesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilmesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilmesController.html" data-type="entity-link" >FilmesController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateFilmeDto.html" data-type="entity-link" >CreateFilmeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Filme.html" data-type="entity-link" >Filme</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFilmeDto.html" data-type="entity-link" >UpdateFilmeDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilmesService.html" data-type="entity-link" >FilmesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});