export const HeroObject = {
    id: 0,
    name: '',
    hash: '',
    sha256: '',
    ext: '',
    mime: '',
    size: 0,
    url: '',
    provider: '',
    provider_metadata: null,
    created_at: '',
    updated_at: '',
}

export const TagObject = {
    id: 0,
    slug: '',
    name: '',
    short_name: '',
    created_at: '',
    updated_at: '',
}

export const IngredientObject = {
    id: 0,
    ingredient: 0,
    recipe: 0,
    quantity: '',
    preview: '',
    created_at: '',
    updated_at: '',
    ingredient_unit: 0,
}

export const RecipeObject = {
    id: 0,
    slug: '',
    title: '',
    method: '',
    created_at: '',
    updated_at: '',
    hero: HeroObject,
    tags: [TagObject],
    ingredients: [IngredientObject],
}
