type Props={src:string;alt:string;className?:string;priority?:boolean};
export default function InstitutionalVisual({src,alt,className="",priority=false}:Props){return <figure className={`cidg-platinum-visual ${className}`.trim()}><img src={src} alt={alt} loading={priority?"eager":"lazy"} decoding="async" fetchPriority={priority?"high":"auto"}/></figure>;}
