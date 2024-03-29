import { Link } from 'react-router-dom'
import React from 'react'

import { RiFacebookBoxFill } from 'react-icons/ri'

const navigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Partners', href: '#' }
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: props => <RiFacebookBoxFill className="w-6 h-6" />
    },
    {
      name: 'Instagram',
      href: '#',
      icon: props => <RiFacebookBoxFill className="w-6 h-6" />
    },
    {
      name: 'X',
      href: '#',
      icon: props => <RiFacebookBoxFill className="w-6 h-6" />
    },
    {
      name: 'GitHub',
      href: '#',
      icon: props => <RiFacebookBoxFill className="w-6 h-6" />
    },
    {
      name: 'YouTube',
      href: '#',
      icon: props => <RiFacebookBoxFill className="w-6 h-6" />
    }
  ]
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map(item => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2020 Your Company, Inc. All rights reserved.
        </p>
      </div>
      <div className="py-12">
        <div className="flex gap-x-6 flex-wrap items-center justify-center text-gray-900">
          <Link
            className="px-4 py-3 border rounded hover:bg-zinc-100"
            to={'/posts/categories/:Agriculture'}
          >
            Agriculture
          </Link>
          <Link
            className="border rounded px-4 py-3 hover:bg-zinc-100"
            to={'/posts/categories/:Business'}
          >
            Business
          </Link>
          <Link
            className="border rounded px-4 py-3 hover:bg-zinc-100"
            to={'/posts/categories/:Entertainment'}
          >
            Entertainment
          </Link>
          <Link
            className="border rounded px-4 py-3 hover:bg-zinc-100"
            to={'/posts/categories/:Art'}
          >
            Art
          </Link>
          <Link
            className="border rounded px-4 py-3 hover:bg-zinc-100"
            to={'/posts/categories/:Investment'}
          >
            Investment
          </Link>
          <Link
            className="border rounded px-4 py-3 hover:bg-zinc-100"
            to={'/posts/categories/:Uncategorized'}
          >
            Uncategorized
          </Link>
          <Link
            className="border rounded px-4 py-3 hover:bg-zinc-100"
            to={'/posts/categories/:Weather'}
          >
            Weather
          </Link>
        </div>
      </div>
    </footer>
  )
}
