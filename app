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
    --tag: string = ""
    --local
] {

    if ( $local ) {

        let tag = (git rev-parse --short HEAD | str trim)
        docker-build $"($image):($tag)"
    } else {

        let token = (get-github-token)
        let $baseimage = (
            create-image 
                $registery 
                $username
                $image
                (git rev-parse --short HEAD | str trim) 
            )

        docker-login $token $registery $username
        docker-build $baseimage
        docker-push $baseimage
    }
}

def "main tag" [
    --registery: string = "ghcr.io"
    --username: string = "pmdevers"
    --image: string = "website"
    tag: string,
    --local
] {
    if ( $local ) {
        let rev = (git rev-parse --short HEAD | str trim)
        let $baseimage = $"($image):($rev)";
        let $newtag = $"($image):($tag)";

        docker-tag-existing $baseimage $newtag

    } else {

        let token = (get-github-token)
        let $baseimage = (
            create-image 
                $registery 
                $username
                $image
                (git rev-parse --short HEAD | str trim) 
            )

        let $image = (
            create-image 
                $registery 
                $username
                $image
                $tag
        )

        docker-login $registery $username
        docker-tag-existing $baseimage $image
    }
}