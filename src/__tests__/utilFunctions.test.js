import { shortenText } from '../utils/functions'
import { wordCount, attachUserName } from "../../server/utils"
import {shortText, longText, posts, users } from './__data__/testData'


test('Will not shorten text under 100', () => {
  let srtLength = shortText.length
  shortenText(shortText)
  expect(shortText).toHaveLength(srtLength)
})
test('Will shorten text over 100', () => {
  let lessLong = shortenText(longText)
  expect(lessLong).not.toHaveLength(longText.length)
  expect(lessLong.slice(-3)).toBe('...')
})

test('Total word count', () => {
  expect(wordCount(posts)).toBe(233)
})

test('Has prop displayName', () => {
  let newPosts = attachUserName(users, posts)
  expect(newPosts[0]).toHaveProperty('displayName')
})
test('Remove post without user', () => {
  let newPosts = attachUserName(users, posts)
  const deletedPosts = posts[5]
  expect(newPosts).not.toContainEqual(deletedPosts)
})
