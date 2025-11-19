import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ExternalLink } from 'lucide-react';
import { products, Product } from '@/data/products';
import { trackAffiliateClick } from '@/components/GoogleAnalytics';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSkinType, setSelectedSkinType] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'face-wash', label: 'Face Wash' },
    { value: 'serum', label: 'Serums' },
    { value: 'treatment-cream', label: 'Treatment Creams' },
    { value: 'mask', label: 'Masks' },
  ];

  const skinTypes = [
    { value: 'all', label: 'All Skin Types' },
    { value: 'Oily', label: 'Oily' },
    { value: 'Dry', label: 'Dry' },
    { value: 'Combination', label: 'Combination' },
    { value: 'Sensitive', label: 'Sensitive' },
    { value: 'Acne-Prone', label: 'Acne-Prone' },
  ];

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const skinTypeMatch = selectedSkinType === 'all' || product.skinTypes.includes(selectedSkinType);
    return categoryMatch && skinTypeMatch;
  });

  const handleAffiliateClick = (product: Product) => {
    trackAffiliateClick(product.name, product.affiliateProgram, product.affiliateLink);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-500 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All Acne Treatment Products
          </h1>
          <p className="text-xl text-green-50 max-w-2xl">
            Browse our complete collection of expert-reviewed acne treatment products. 
            Find the perfect solution for your skin type and concerns.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat.value}
                    variant={selectedCategory === cat.value ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.value)}
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Skin Type Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skin Type
              </label>
              <div className="flex flex-wrap gap-2">
                {skinTypes.map((type) => (
                  <Button
                    key={type.value}
                    variant={selectedSkinType === type.value ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedSkinType(type.value)}
                  >
                    {type.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/400x400/e0f2e9/059669?text=Product+Image';
                      }}
                    />
                    {product.featured && (
                      <Badge className="absolute top-2 right-2 bg-orange-500">
                        Editor's Choice
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 p-4">
                  <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviewCount.toLocaleString()})
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Key Ingredients */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.keyIngredients.slice(0, 2).map((ingredient, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="text-2xl font-bold text-green-600">
                    ${product.price.toFixed(2)}
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0 flex flex-col gap-2">
                  <Link href={`/products/${product.id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      Read Full Review
                    </Button>
                  </Link>
                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600"
                    onClick={() => {
                      handleAffiliateClick(product);
                      window.open(product.affiliateLink, '_blank');
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on {product.affiliateProgram.split(' ')[0]}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No products found matching your filters. Try adjusting your selection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Check out our comprehensive comparison guides to find the perfect acne treatment for your skin type.
          </p>
          <Link href="/comparisons">
            <Button size="lg" variant="secondary">
              View Comparison Guides
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
