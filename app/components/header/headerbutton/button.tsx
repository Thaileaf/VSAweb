export default function HeaderButton({href, title} : {href: string, title: string})  {
    return(
      <a href={href} className={'headerbutton'}>
          <h2>{title}</h2>
      </a>

    )

}