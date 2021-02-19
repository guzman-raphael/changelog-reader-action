exports.getVersionById = (versions, id) => {
  if (id != null) {
    return versions.find(version => version.id === id)
  }

  return [...versions].shift()
}
