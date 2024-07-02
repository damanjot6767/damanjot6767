import { cn } from "../../lib/utils"

interface TypographyProps {
    title?: string;
    className?: string;
    onClick?: Function;
}

export function TypographyH1({title="hello", className}: TypographyProps) {
    return (
        <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",className)}>
            {title}
        </h1>
    )
}


export function TypographyH2({title="hello", className}: TypographyProps) {
    return (
        <h2 className={cn("scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0",className)}>
            {title}
        </h2>
    )
}

export function TypographyH3({title="hello", className=""}: TypographyProps) {
    return (
        <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight",className)}>
            {title}
        </h3>
    )
}

export function TypographyH4({title="hello", className=""}: TypographyProps) {
    return (
        <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight",className)}>
            {title}
        </h4>
    )
}

export function TypographyH5({title="hello", className="", onClick}: TypographyProps) {
    return (
        <h4 onClick={()=> onClick && onClick()} className={cn("scroll-m-20 text-md font-semibold tracking-tight", className)}>
            {title}
        </h4>
    )
}

export function TypographyH6({title="hello", className=""}: TypographyProps) {
    return (
        <h4 className={cn("scroll-m-20 text-lg font-bold ",className)}>
            {title}
        </h4>
    )
}

export function TypographyP({title="hello", className=""}: TypographyProps) {
    return (
        <p className={cn("leading-6 [&:not(:first-child)]:mt-6", className)}>
            {title}
        </p>
    )
}

