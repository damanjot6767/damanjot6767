import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "../../utils/icons"
import { cn } from '../../lib/utils';

interface SocialLinkModal {
    id: string;
    social_type: string;
    social_link: string;
}

interface SocialLinkProps {
    items : SocialLinkModal[]
    className?: string
}

export const SocialLinks = ({items, className}: SocialLinkProps) => {
    return (
        <div className='
            flex
            items-center
            justify-center
            group'>
            {items?.map(({ id, social_link, social_type }, index) => (
                <div
                    key={id}
                    className={cn("flex border group-hover:border-primary p-3 px-3", 
                    className,
                    items?.length - 1 && "border-r-1",
                    )}>
                    {social_type === 'facebook' ? (
                        <FaFacebookF
                            className="h-[18px] text-border transition-all cursor-pointer hover:text-primary-foreground"
                            onClick={() => window.open(social_link, '_blank')}
                        />
                    ) : social_type === 'twitter' ? (
                        <FaTwitter
                            className="h-[18px] text-border transition-all cursor-pointer hover:text-primary-foreground"
                            onClick={() => window.open(social_link, '_blank')}
                        />
                    ) : social_type === 'instagram' ? (
                        <FaInstagram
                            className="h-[18px] text-border transition-all cursor-pointer hover:text-primary-foreground"
                            onClick={() => window.open(social_link, '_blank')}
                        />
                    ) : social_type === 'linkedin' ? (
                        <FaLinkedinIn
                            className="h-[18px] text-border transition-all cursor-pointer hover:text-primary-foreground"
                            onClick={() => window.open(social_link, '_blank')}
                        />
                    ) : null}
                </div>
            ))}
        </div>
    )
}