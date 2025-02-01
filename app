#!/usr/bin/env nu

source .scripts/docker.nu
source .scripts/github.nu

def main [] {
    app --help
}

def "main build" [] {
    bun run build   
}

def "main pack" [
    --registery: string = "ghcr.io"
    --username: string = "pmdevers"
    --image: string = "website"
    --tag: string = "",
] {

    let token = (main get github)
    let $baseimage = (
        main create-image 
            $registery 
            $username
            $image
            (git rev-parse --short HEAD | str trim) 
        )

    #main docker login $token $registery $username
    #main docker build $baseimage
    main tag $tag
}

def "main tag" [
    --registery: string = "ghcr.io"
    --username: string = "pmdevers"
    --image: string = "website"
    tag: string,
] {
    let token = (main get github)
    let $baseimage = (
        main create-image 
            $registery 
            $username
            $image
            (git rev-parse --short HEAD | str trim) 
        )

    let $image = (
        main create-image 
            $registery 
            $username
            $image
            $tag
    )

    main docker login $token $registery $username
    main docker tag-existing $baseimage $image
}