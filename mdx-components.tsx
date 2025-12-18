import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => (
      <Image
        {...props}
        src={props.src || ''}
        alt={props.alt || ''}
        width={800}
        height={600}
        className="w-full h-auto my-8 rounded"
      />
    ),
    ...components,
  }
}

