export interface ProductReview {
  productId: string;
  fullReview: string;
  pros: string[];
  cons: string[];
  howToUse: string;
  clinicalEvidence: string;
  userExperiences: {
    rating: number;
    review: string;
    author: string;
    skinType: string;
  }[];
  expertOpinion: string;
  bestFor: string[];
  notRecommendedFor: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const productReviews: Record<string, ProductReview> = {
  'cerave-foaming-cleanser': {
    productId: 'cerave-foaming-cleanser',
    fullReview: `CeraVe Foaming Facial Cleanser has become a staple in many skincare routines, and for good reason. This dermatologist-developed cleanser is specifically formulated for normal to oily skin types, offering a gentle yet effective cleansing experience without stripping the skin of its natural moisture.

The formula contains three essential ceramides (1, 3, and 6-II) that help restore and maintain the skin's natural barrier. This is crucial for acne-prone skin, as a compromised skin barrier can lead to increased sensitivity and breakouts. The addition of hyaluronic acid provides lightweight hydration, while niacinamide helps calm inflammation and reduce redness associated with acne.

What sets this cleanser apart is its non-foaming gel texture that transforms into a light foam upon contact with water. It effectively removes dirt, oil, and makeup without leaving the skin feeling tight or dry. The pH-balanced formula (around 5.5) matches the skin's natural pH, making it suitable even for sensitive skin.

The cleanser is fragrance-free, non-comedogenic, and has been tested by dermatologists, making it a safe choice for those with acne-prone or sensitive skin. Its affordable price point makes it accessible to a wide range of users, and the generous 16 oz bottle lasts for months with regular use.`,
    pros: [
      'Contains essential ceramides to restore skin barrier',
      'Gentle formula suitable for sensitive skin',
      'Non-comedogenic and fragrance-free',
      'Affordable and widely available',
      'Large bottle size (16 oz) provides excellent value',
      'pH-balanced formula',
    ],
    cons: [
      'May not remove heavy makeup effectively',
      'Some users find it slightly drying',
      'Pump dispenser can be difficult to use when product runs low',
    ],
    howToUse: `**Morning and Evening Routine:**
1. Wet your face with lukewarm water
2. Pump a small amount (about a nickel-sized dollop) into your hands
3. Gently massage onto your face in circular motions for 30-60 seconds
4. Rinse thoroughly with lukewarm water
5. Pat dry with a clean towel
6. Follow with your regular skincare routine (toner, serum, moisturizer)

**Tips for Best Results:**
- Use twice daily for optimal results
- If you wear heavy makeup, consider double cleansing (oil cleanser first, then this)
- Avoid using hot water, as it can strip natural oils
- Don't over-cleanse; 60 seconds is sufficient`,
    clinicalEvidence: `CeraVe products are developed with dermatologists and backed by scientific research. The inclusion of ceramides has been clinically proven to improve skin barrier function. A study published in the Journal of Clinical and Aesthetic Dermatology found that ceramide-containing cleansers significantly improved skin hydration and barrier function compared to traditional cleansers.

The niacinamide content (vitamin B3) has been extensively studied for its anti-inflammatory properties. Research shows that 2-5% niacinamide can reduce acne lesions by up to 60% over 8 weeks. While the exact concentration in this cleanser isn't disclosed, CeraVe formulations typically contain therapeutic levels of active ingredients.`,
    userExperiences: [
      {
        rating: 5,
        review: "This cleanser changed my skin! I've struggled with acne for years, and this is the first cleanser that doesn't make my face feel stripped. My breakouts have reduced significantly after 3 months of use.",
        author: "Sarah M.",
        skinType: "Oily, Acne-Prone"
      },
      {
        rating: 4,
        review: "Great cleanser for the price. It's gentle and doesn't irritate my sensitive skin. I dock one star because it doesn't remove waterproof mascara well, so I have to use a separate makeup remover first.",
        author: "Jessica L.",
        skinType: "Combination, Sensitive"
      },
      {
        rating: 5,
        review: "Dermatologist recommended this to me, and I'm so glad I listened. My skin is clearer, less oily, and the texture has improved. Will definitely repurchase!",
        author: "Michael T.",
        skinType: "Oily"
      },
    ],
    expertOpinion: `As a skincare expert, I highly recommend CeraVe Foaming Facial Cleanser for individuals with oily or combination skin who are dealing with acne. The ceramide-rich formula is particularly beneficial for those who have compromised their skin barrier through harsh acne treatments or over-exfoliation.

The inclusion of niacinamide is a smart addition, as it addresses multiple skin concerns simultaneously: reducing inflammation, regulating sebum production, and improving skin texture. However, I advise patients to be patient—visible improvements typically take 4-6 weeks of consistent use.

For those with very dry or mature skin, I recommend the CeraVe Hydrating Cleanser instead, as this foaming version may be slightly too cleansing.`,
    bestFor: [
      'Normal to oily skin types',
      'Acne-prone skin',
      'Sensitive skin',
      'Those seeking an affordable, effective cleanser',
      'People with compromised skin barriers',
    ],
    notRecommendedFor: [
      'Very dry or dehydrated skin',
      'Those who prefer a rich, creamy cleanser',
      'People with extremely sensitive skin (patch test first)',
    ],
    faq: [
      {
        question: 'Can I use this cleanser if I have dry skin?',
        answer: 'While this cleanser is formulated for normal to oily skin, some people with dry skin use it successfully. However, if you have very dry skin, consider the CeraVe Hydrating Cleanser instead, which is specifically designed for dry to very dry skin.',
      },
      {
        question: 'Will this cleanser remove makeup?',
        answer: 'It can remove light makeup, but for heavy or waterproof makeup, we recommend using a dedicated makeup remover or cleansing oil first, then following up with this cleanser (double cleansing method).',
      },
      {
        question: 'Is this cleanser suitable for acne-prone skin?',
        answer: 'Yes! This cleanser is non-comedogenic and contains niacinamide, which helps reduce inflammation and regulate oil production. Many dermatologists recommend it for acne-prone skin.',
      },
      {
        question: 'How long does one bottle last?',
        answer: 'With twice-daily use, a 16 oz bottle typically lasts 3-4 months, making it very cost-effective.',
      },
    ],
  },

  'paulas-choice-bha-liquid': {
    productId: 'paulas-choice-bha-liquid',
    fullReview: `Paula's Choice 2% BHA Liquid Exfoliant is widely considered the gold standard of chemical exfoliants, and it has earned its cult-favorite status through years of delivering consistent results. This leave-on exfoliant contains 2% salicylic acid (beta hydroxy acid), which penetrates deep into pores to dissolve oil, dead skin cells, and debris that cause acne and blackheads.

Unlike physical scrubs that can irritate and damage the skin, this liquid exfoliant works gently at the cellular level. The lightweight, water-like texture absorbs quickly without leaving any residue, making it suitable for all skin types, including sensitive skin. The pH level of 3.2-3.8 is optimal for salicylic acid efficacy, ensuring maximum penetration and effectiveness.

What makes this product stand out is its simplicity and focus on efficacy. The formula is free of fragrances, dyes, and unnecessary additives that could irritate the skin. Instead, it includes green tea extract, a powerful antioxidant that provides additional anti-inflammatory benefits.

Users consistently report visible improvements in skin texture, reduced pore size, fewer breakouts, and a more even skin tone. While some may experience initial purging (a temporary increase in breakouts as the product brings underlying congestion to the surface), this typically subsides within 2-4 weeks, revealing clearer, smoother skin.`,
    pros: [
      'Highly effective 2% salicylic acid concentration',
      'Suitable for all skin types, including sensitive',
      'Fragrance-free and non-irritating formula',
      'Reduces blackheads, whiteheads, and enlarged pores',
      'Improves skin texture and tone',
      'Can be used on face and body',
      'Backed by extensive research and positive reviews',
    ],
    cons: [
      'Higher price point compared to drugstore alternatives',
      'May cause initial purging',
      'Some users experience dryness if overused',
      'Bottle design makes it difficult to gauge remaining product',
    ],
    howToUse: `**For Beginners:**
1. Start by using 2-3 times per week in the evening
2. After cleansing and toning, apply a few drops to a cotton pad or directly to your hands
3. Gently sweep across your face and neck, avoiding the eye area
4. Wait 1-2 minutes for absorption
5. Follow with serum and moisturizer
6. Always use sunscreen during the day (BHA increases sun sensitivity)

**For Experienced Users:**
- Can be used once or twice daily
- Can be layered under other treatments
- Can be applied to specific problem areas (back, chest) for body acne

**Important Tips:**
- Don't rinse off—this is a leave-on treatment
- Start slowly to allow your skin to adjust
- If irritation occurs, reduce frequency
- Pair with a good moisturizer to prevent dryness`,
    clinicalEvidence: `Salicylic acid is one of the most well-researched ingredients in dermatology. Multiple clinical studies have demonstrated its effectiveness in treating acne:

- A 2015 study in the Journal of Clinical and Aesthetic Dermatology found that 2% salicylic acid reduced acne lesions by 50-60% over 12 weeks.
- Research published in Dermatologic Therapy showed that salicylic acid is particularly effective for comedonal acne (blackheads and whiteheads).
- A comparative study found that 2% salicylic acid was as effective as 5% benzoyl peroxide but with fewer side effects.

The pH level of Paula's Choice BHA (3.2-3.8) is scientifically optimized for maximum efficacy. Studies show that salicylic acid works best at a pH between 3 and 4, where it remains in its active form.`,
    userExperiences: [
      {
        rating: 5,
        review: "Holy grail product! I've been using this for 5 years, and my skin has never been clearer. It completely eliminated my blackheads and keeps my breakouts under control. Worth every penny.",
        author: "Amanda R.",
        skinType: "Oily, Acne-Prone"
      },
      {
        rating: 5,
        review: "I was skeptical about the price, but this product delivers. My pores look smaller, my skin is smoother, and I rarely get breakouts anymore. I went through a 2-week purging period, but it was worth it.",
        author: "David K.",
        skinType: "Combination"
      },
      {
        rating: 4,
        review: "Great product that really works, but I have to be careful not to overuse it. I use it 3-4 times a week, and that's the sweet spot for my sensitive skin. Any more and I get dryness.",
        author: "Emily S.",
        skinType: "Sensitive, Acne-Prone"
      },
    ],
    expertOpinion: `Paula's Choice 2% BHA Liquid Exfoliant is one of the few products I recommend to nearly all my patients dealing with acne, blackheads, or enlarged pores. The formulation is scientifically sound, with an optimal pH and concentration of salicylic acid.

What I appreciate most is the gentle yet effective approach. Unlike harsh scrubs or high-percentage peels, this product can be used regularly without causing significant irritation. The addition of green tea extract provides antioxidant protection, which is particularly beneficial for acne-prone skin that often experiences inflammation.

I typically recommend starting with 2-3 applications per week and gradually increasing frequency as tolerated. Patients should be informed about the possibility of purging and encouraged to persist through this initial phase. Results are typically visible within 4-6 weeks, with continued improvement over 3-6 months.

For optimal results, I advise pairing this with a gentle cleanser, hydrating serum, and broad-spectrum sunscreen.`,
    bestFor: [
      'All skin types, especially oily and combination',
      'Acne-prone skin',
      'Blackheads and whiteheads',
      'Enlarged pores',
      'Uneven skin texture',
      'Fine lines and wrinkles',
      'Body acne (back, chest)',
    ],
    notRecommendedFor: [
      'Those allergic to aspirin (salicylates)',
      'Very dry or dehydrated skin (use with caution)',
      'Pregnant or breastfeeding (consult doctor first)',
      'Those using prescription retinoids (without dermatologist approval)',
    ],
    faq: [
      {
        question: 'What is purging, and how long does it last?',
        answer: 'Purging occurs when a product accelerates skin cell turnover, bringing underlying congestion to the surface faster. It typically lasts 2-4 weeks. If breakouts continue beyond 6 weeks or worsen significantly, discontinue use and consult a dermatologist.',
      },
      {
        question: 'Can I use this with retinol or vitamin C?',
        answer: 'Yes, but introduce products gradually. Use BHA in the morning and retinol at night, or alternate nights. Vitamin C can be used in the morning before BHA. Always monitor your skin for signs of irritation.',
      },
      {
        question: 'Why is this more expensive than drugstore BHA products?',
        answer: 'Paula\'s Choice uses a higher quality formulation with optimal pH, additional beneficial ingredients like green tea extract, and undergoes extensive testing. Many users find it more effective and less irritating than cheaper alternatives.',
      },
      {
        question: 'How long does one bottle last?',
        answer: 'A 4 oz (118 ml) bottle typically lasts 3-4 months with once-daily use on the face, or 6-8 months with every-other-day use.',
      },
    ],
  },

  'differin-gel': {
    productId: 'differin-gel',
    fullReview: `Differin Gel (Adapalene 0.1%) represents a significant breakthrough in over-the-counter acne treatment. Previously available only by prescription, this retinoid became available OTC in 2016, making professional-strength acne treatment accessible to everyone.

Adapalene is a third-generation retinoid that works by normalizing skin cell turnover and reducing inflammation. Unlike benzoyl peroxide or salicylic acid, which work primarily on the surface, adapalene targets the root causes of acne at the cellular level. It prevents the formation of microcomedones (the precursors to all acne lesions) and has anti-inflammatory properties that reduce redness and swelling.

What makes Differin particularly impressive is its dual action: it treats existing acne while preventing new breakouts from forming. Clinical studies show that adapalene is as effective as tretinoin (Retin-A) for acne treatment but with less irritation. It's also more stable in sunlight and can be used with benzoyl peroxide, making it versatile for combination treatments.

The gel formula is lightweight and absorbs quickly without leaving a greasy residue. However, users should be prepared for an adjustment period. Retinoids can cause initial dryness, redness, and peeling as the skin acclimates to increased cell turnover. This "retinization" period typically lasts 2-4 weeks, after which the skin adapts and side effects diminish.`,
    pros: [
      'Prescription-strength retinoid available OTC',
      'Treats and prevents acne at the source',
      'Reduces both inflammatory and non-inflammatory acne',
      'Improves skin texture and reduces post-acne marks',
      'More stable and less irritating than tretinoin',
      'Can be combined with benzoyl peroxide',
      'Affordable compared to prescription retinoids',
      'Backed by extensive clinical research',
    ],
    cons: [
      'Initial adjustment period with dryness and peeling',
      'Results take 12 weeks to fully manifest',
      'Increases sun sensitivity (sunscreen is mandatory)',
      'Not suitable for pregnant or breastfeeding women',
      'May cause purging in first 4-6 weeks',
    ],
    howToUse: `**Starting Differin (Weeks 1-4):**
1. Begin with every other night application
2. Cleanse face and wait 10-15 minutes until completely dry
3. Apply a pea-sized amount to entire face (not just spots)
4. Avoid eye area, lips, and any broken skin
5. Follow with a gentle, fragrance-free moisturizer
6. Use sunscreen every morning (SPF 30+)

**Maintenance (After Week 4):**
- Increase to nightly application if tolerated
- Continue using moisturizer and sunscreen
- Be patient—full results take 12 weeks

**Tips for Minimizing Irritation:**
- Start with every 3rd night if you have very sensitive skin
- Apply moisturizer first, wait 10 minutes, then apply Differin (buffering technique)
- Avoid other active ingredients (AHAs, BHAs, vitamin C) during adjustment period
- Don't use more than a pea-sized amount—more is not better
- Avoid waxing or harsh exfoliation while using Differin`,
    clinicalEvidence: `Adapalene has been extensively studied in clinical trials:

- A 12-week study published in the Journal of the American Academy of Dermatology found that adapalene 0.1% reduced inflammatory lesions by 54% and non-inflammatory lesions by 47%.
- Comparative studies show adapalene is as effective as tretinoin 0.025% but with significantly less irritation.
- A 2017 meta-analysis concluded that adapalene is one of the most effective topical retinoids for acne treatment.
- Long-term studies (24+ weeks) show continued improvement with sustained use.

The FDA approval of OTC adapalene was based on two pivotal studies involving over 2,000 participants, demonstrating both efficacy and safety for self-directed use.`,
    userExperiences: [
      {
        rating: 5,
        review: "Life-changing product! I suffered from moderate acne for 10 years, and Differin finally cleared my skin. Yes, the first month was rough with peeling and purging, but I pushed through and now my skin is the clearest it's ever been. Stick with it!",
        author: "Rachel P.",
        skinType: "Oily, Acne-Prone"
      },
      {
        rating: 4,
        review: "Very effective but requires patience. I'm at week 8, and my skin is significantly better. The purging phase was discouraging, but I'm glad I didn't give up. Make sure to moisturize heavily!",
        author: "Jason M.",
        skinType: "Combination"
      },
      {
        rating: 3,
        review: "It works, but the irritation was too much for my sensitive skin. I had to stop after 6 weeks due to excessive dryness and redness. Might work better for those with hardier skin.",
        author: "Lisa T.",
        skinType: "Sensitive, Acne-Prone"
      },
    ],
    expertOpinion: `As a dermatologist, I'm thrilled that adapalene is now available over-the-counter. It's one of the most effective acne treatments we have, and making it accessible without a prescription is a game-changer for many patients.

However, I always counsel patients about realistic expectations and proper use. Differin is not a quick fix—it requires commitment and patience. The first 4-6 weeks can be challenging, with potential purging and irritation. Many people give up during this phase, which is unfortunate because those who persist almost always see significant improvement by week 12.

I recommend Differin as a first-line treatment for mild to moderate acne, particularly for patients with comedonal acne (blackheads and whiteheads). For optimal results, I often prescribe it in combination with benzoyl peroxide (used in the morning) or oral antibiotics for more severe cases.

Key success factors:
1. Start slowly (every other night)
2. Use adequate moisturizer
3. Apply sunscreen religiously
4. Be patient—give it 12 weeks
5. Don't combine with other harsh actives initially`,
    bestFor: [
      'Mild to moderate acne',
      'Comedonal acne (blackheads, whiteheads)',
      'Inflammatory acne (papules, pustules)',
      'Post-acne marks and hyperpigmentation',
      'Preventing future breakouts',
      'Improving overall skin texture',
    ],
    notRecommendedFor: [
      'Pregnant or breastfeeding women',
      'Those with eczema or rosacea',
      'Very sensitive or compromised skin barriers',
      'People unable to use daily sunscreen',
      'Those seeking immediate results (requires 12 weeks)',
    ],
    faq: [
      {
        question: 'How long until I see results?',
        answer: 'Initial improvements may be visible around week 4-6, but full results typically take 12 weeks. Some users experience worsening (purging) in weeks 2-6 before improvement. Patience is crucial.',
      },
      {
        question: 'Can I use Differin with other acne treatments?',
        answer: 'Yes, but introduce products gradually. Differin can be used with benzoyl peroxide (apply BP in morning, Differin at night). Avoid combining with other retinoids, AHAs, or BHAs initially. Consult a dermatologist for combination therapy guidance.',
      },
      {
        question: 'Why is my skin getting worse?',
        answer: 'This is likely purging—a normal process where Differin accelerates cell turnover, bringing underlying congestion to the surface. Purging typically peaks around weeks 3-4 and resolves by week 6-8. If it continues beyond 8 weeks or is severe, consult a dermatologist.',
      },
      {
        question: 'Can I use Differin for anti-aging?',
        answer: 'While Differin is FDA-approved only for acne, retinoids in general have anti-aging benefits. Adapalene can improve fine lines, texture, and tone. However, prescription tretinoin or tazarotene are more effective for anti-aging purposes.',
      },
    ],
  },

  'the-ordinary-niacinamide': {
    productId: 'the-ordinary-niacinamide',
    fullReview: `The Ordinary Niacinamide 10% + Zinc 1% is arguably one of the most popular and affordable serums in the skincare world. This water-based serum has gained cult status for its ability to reduce blemishes, minimize pores, and regulate sebum production—all at an incredibly accessible price point.

Niacinamide (vitamin B3) is a powerhouse ingredient backed by extensive research. At 10% concentration, this serum delivers therapeutic levels that visibly improve skin texture and tone. The addition of 1% zinc PCA enhances the formula's ability to control oil production and reduce inflammation, making it particularly effective for acne-prone skin.

The lightweight, slightly viscous texture absorbs quickly without leaving a sticky residue. However, some users report pilling when layered with certain products, particularly silicone-based primers or sunscreens. The key is to allow adequate absorption time (2-3 minutes) before applying subsequent products.

What makes this serum exceptional is its versatility. It addresses multiple skin concerns simultaneously: acne, enlarged pores, uneven tone, and excess oil. Clinical studies show that niacinamide can reduce acne lesions by up to 60% over 8 weeks, improve skin barrier function, and reduce hyperpigmentation.

At under $6 for 30ml, this serum offers incredible value. While luxury brands charge $50+ for similar niacinamide concentrations, The Ordinary proves that effective skincare doesn't require a hefty price tag.`,
    pros: [
      'Extremely affordable ($5-6)',
      'High concentration of niacinamide (10%)',
      'Reduces blemishes and regulates oil',
      'Minimizes pores and improves texture',
      'Suitable for most skin types',
      'Vegan and cruelty-free',
      'Large bottle size for the price',
    ],
    cons: [
      'Can pill when layered with some products',
      'May cause flushing in sensitive individuals',
      'Dropper packaging can be unhygienic',
      'Some find the texture slightly tacky',
    ],
    howToUse: `**Daily Application:**
1. Cleanse and tone your face
2. Apply 2-3 drops to your entire face (avoid eye area)
3. Wait 2-3 minutes for full absorption
4. Follow with moisturizer and sunscreen (AM) or night cream (PM)

**Tips:**
- Use morning and evening for best results
- If pilling occurs, reduce amount or wait longer between layers
- Can be mixed with moisturizer if preferred
- Start with once daily if you have sensitive skin`,
    clinicalEvidence: `Niacinamide is one of the most researched skincare ingredients:

- A 2013 study in the International Journal of Cosmetic Science found that 5% niacinamide significantly reduced sebum production after 4 weeks.
- Research published in Dermatologic Surgery showed that 4% niacinamide reduced acne lesions by 60% over 8 weeks.
- Multiple studies confirm niacinamide's ability to improve skin barrier function and reduce transepidermal water loss.
- A 2011 study demonstrated that niacinamide effectively reduces hyperpigmentation and evens skin tone.

The 10% concentration in this serum is at the higher end of the effective range, providing maximum benefits without irritation for most users.`,
    userExperiences: [
      {
        rating: 5,
        review: "Best budget serum ever! My pores are noticeably smaller, and my skin is less oily. I've been using it for 6 months and will never stop. Just make sure to let it absorb fully before applying other products.",
        author: "Maria G.",
        skinType: "Oily, Large Pores"
      },
      {
        rating: 4,
        review: "Great product for the price. It does pill a bit with my sunscreen, so I use it only at night. My acne has improved significantly in 2 months.",
        author: "Tom H.",
        skinType: "Combination, Acne-Prone"
      },
      {
        rating: 3,
        review: "It works, but the texture is a bit sticky for my liking. I prefer mixing it with my moisturizer. Effective for reducing redness though.",
        author: "Sophie L.",
        skinType: "Sensitive"
      },
    ],
    expertOpinion: `The Ordinary Niacinamide 10% + Zinc 1% is an excellent entry-level serum that I recommend to many patients, particularly those new to active ingredients or on a budget. The 10% concentration is clinically effective, and the addition of zinc provides extra benefits for oily, acne-prone skin.

However, I counsel patients about realistic expectations. While this serum is effective, it's not a miracle cure. Consistent use over 8-12 weeks is necessary to see significant results. Some patients experience initial flushing or tingling, which typically subsides with continued use.

For optimal results, I recommend pairing this with a gentle cleanser, a good moisturizer, and daily sunscreen. It works well in combination with other treatments like retinoids or AHAs/BHAs, though these should be introduced gradually.`,
    bestFor: [
      'Oily and combination skin',
      'Acne-prone skin',
      'Enlarged pores',
      'Uneven skin tone',
      'Budget-conscious shoppers',
      'Beginners to active ingredients',
    ],
    notRecommendedFor: [
      'Those allergic to niacinamide',
      'People who prefer silky, luxurious textures',
      'Those using very high concentrations of vitamin C (may cause flushing)',
    ],
    faq: [
      {
        question: 'Can I use this with vitamin C?',
        answer: 'Yes, but use them at different times (vitamin C in AM, niacinamide in PM) or wait 10-15 minutes between applications. The myth that they cancel each other out has been debunked.',
      },
      {
        question: 'Why does it pill on my skin?',
        answer: 'Pilling occurs when the serum interacts with silicone-based products. Wait 3-5 minutes for full absorption before applying other products, or use less product.',
      },
      {
        question: 'How long until I see results?',
        answer: 'Most users notice improvements in oil control within 2-3 weeks. Visible reduction in pores and blemishes typically takes 4-8 weeks of consistent use.',
      },
    ],
  },

  'la-roche-posay-effaclar': {
    productId: 'la-roche-posay-effaclar',
    fullReview: `La Roche-Posay Effaclar Purifying Foaming Gel is a dermatologist-favorite cleanser specifically formulated for oily, acne-prone skin. This French pharmacy staple has earned its reputation through a gentle yet effective formula that removes excess oil and impurities without disrupting the skin's natural balance.

The star ingredient is zinc pidolate, a mineral compound that helps regulate sebum production and has anti-inflammatory properties. Combined with La Roche-Posay's signature thermal spring water, this cleanser soothes and calms irritated skin while thoroughly cleansing.

The gel texture transforms into a light foam that feels refreshing and clean without being stripping. Unlike many acne cleansers that leave skin feeling tight and dry, Effaclar maintains the skin's pH balance and doesn't compromise the moisture barrier. This is crucial for acne-prone skin, as over-cleansing can actually trigger more oil production.

The formula is soap-free, fragrance-free, and paraben-free, making it suitable even for sensitive skin. It's also non-comedogenic and has been tested on acne-prone skin under dermatological control. Many dermatologists recommend this as a first-line cleanser for patients starting acne treatment, as it's gentle enough to use alongside stronger actives like retinoids or benzoyl peroxide.`,
    pros: [
      'Gentle formula suitable for sensitive skin',
      'Effectively removes oil without over-drying',
      'Contains soothing thermal spring water',
      'Soap-free and pH-balanced',
      'Fragrance-free and non-comedogenic',
      'Recommended by dermatologists worldwide',
      'Works well with other acne treatments',
    ],
    cons: [
      'Higher price point than drugstore alternatives',
      'May not be strong enough for severe acne',
      'Doesn\'t remove heavy makeup effectively',
      'Smaller bottle size (6.76 oz)',
    ],
    howToUse: `**Morning and Evening:**
1. Wet face with lukewarm water
2. Apply a small amount to hands and work into a lather
3. Gently massage onto face in circular motions
4. Rinse thoroughly
5. Pat dry and follow with your skincare routine

**Best Practices:**
- Use twice daily for optimal results
- Double cleanse if wearing makeup or sunscreen
- Avoid hot water which can strip natural oils
- Follow with a lightweight, non-comedogenic moisturizer`,
    clinicalEvidence: `La Roche-Posay products undergo rigorous clinical testing. Studies on the Effaclar line show:

- Significant reduction in sebum production after 4 weeks of use
- Improved skin tolerance and reduced irritation compared to traditional acne cleansers
- Thermal spring water has been clinically proven to have anti-inflammatory and soothing properties
- Zinc pidolate effectively regulates sebum without causing dryness

The brand conducts extensive testing on sensitive and acne-prone skin, with products formulated to minimize allergic reactions.`,
    userExperiences: [
      {
        rating: 5,
        review: "My dermatologist recommended this, and it's been perfect for my sensitive, acne-prone skin. It cleans thoroughly without irritation. I've been using it for 2 years and my skin has never been better.",
        author: "Claire D.",
        skinType: "Sensitive, Acne-Prone"
      },
      {
        rating: 4,
        review: "Great cleanser that doesn't dry out my skin. It's gentle but effective. The only downside is the price—it's more expensive than CeraVe, but I think it's worth it for my sensitive skin.",
        author: "Alex P.",
        skinType: "Oily, Sensitive"
      },
      {
        rating: 4,
        review: "Love this cleanser! It's gentle and doesn't cause breakouts. I use it morning and night. Just wish the bottle was bigger for the price.",
        author: "Nina S.",
        skinType: "Combination"
      },
    ],
    expertOpinion: `La Roche-Posay Effaclar is one of my top recommendations for patients with sensitive, acne-prone skin. The gentle formulation makes it ideal for those who have experienced irritation from harsher acne cleansers.

The zinc pidolate and thermal spring water combination provides a unique benefit—effective cleansing with soothing properties. This is particularly valuable for patients using prescription retinoids or other potentially irritating treatments, as it won't exacerbate sensitivity.

While it may not be strong enough as a standalone treatment for severe acne, it's an excellent foundation for a comprehensive acne treatment regimen. I often prescribe it alongside topical retinoids or oral medications.`,
    bestFor: [
      'Oily and combination skin',
      'Sensitive, acne-prone skin',
      'Those using prescription acne treatments',
      'People who find other cleansers too harsh',
      'Mild to moderate acne',
    ],
    notRecommendedFor: [
      'Very dry skin',
      'Those on a tight budget',
      'Severe cystic acne (needs stronger treatment)',
    ],
    faq: [
      {
        question: 'Is this better than CeraVe Foaming Cleanser?',
        answer: 'Both are excellent. La Roche-Posay is gentler and better for very sensitive skin, while CeraVe offers better value. Choose based on your skin sensitivity and budget.',
      },
      {
        question: 'Can I use this if I have rosacea?',
        answer: 'Yes, many people with rosacea use this successfully due to its gentle, soothing formula. However, always patch test first and consult your dermatologist.',
      },
      {
        question: 'Does it contain salicylic acid?',
        answer: 'No, this version doesn\'t contain salicylic acid. La Roche-Posay has a separate Effaclar Medicated Gel Cleanser with salicylic acid if you need that ingredient.',
      },
    ],
  },

  'aztec-secret-clay-mask': {
    productId: 'aztec-secret-clay-mask',
    fullReview: `Aztec Secret Indian Healing Clay is a cult-favorite mask that has maintained its popularity for decades. This 100% natural calcium bentonite clay mask is often called "the world's most powerful facial," and while that's marketing hyperbole, it's undeniably effective for deep-cleaning pores and controlling excess oil.

The concept is simple: mix the powder with apple cider vinegar (or water for sensitive skin) to create a paste, apply to face, and let it dry. As the mask dries, you'll feel a pulsating sensation—this is the clay drawing out impurities from deep within your pores. The result is visibly cleaner, tighter-looking skin.

Bentonite clay has a negative electrical charge that attracts positively charged toxins, oils, and impurities like a magnet. When mixed with apple cider vinegar, the combination creates a powerful detoxifying treatment that can unclog even the most stubborn pores.

However, this is not a gentle mask. It's intense, and overuse can lead to dryness and irritation. It's best used as a weekly treatment rather than a daily one. The pulsating sensation can be uncomfortable for some, and the mask can be messy to apply and remove.

At around $15 for a 1-pound jar that lasts months (even years), it offers exceptional value. The powder format means you control the consistency and can customize the mixture to your skin's needs.`,
    pros: [
      '100% natural calcium bentonite clay',
      'Extremely effective at deep-cleaning pores',
      'Removes blackheads and reduces oil',
      'Incredible value (1 lb jar lasts months)',
      'Customizable consistency',
      'Vegan and cruelty-free',
      'No added chemicals or fragrances',
    ],
    cons: [
      'Very drying if overused',
      'Messy to mix and apply',
      'Pulsating sensation can be uncomfortable',
      'Not suitable for sensitive or dry skin',
      'Requires mixing (not ready-to-use)',
      'Can temporarily cause redness',
    ],
    howToUse: `**Weekly Treatment:**
1. Mix 1-2 tablespoons of clay powder with equal parts apple cider vinegar (or water)
2. Stir with a non-metal spoon until smooth paste forms
3. Apply thick layer to clean, dry face (avoid eye area)
4. Leave on for 5-10 minutes (beginners) or 15-20 minutes (experienced users)
5. Rinse thoroughly with warm water
6. Follow with hydrating toner and moisturizer

**Important Tips:**
- Don't use metal bowls or spoons (reduces effectiveness)
- Start with 5-7 minutes to test tolerance
- Use once weekly; twice weekly maximum for very oily skin
- Always moisturize afterward
- Expect temporary redness (normal and fades quickly)`,
    clinicalEvidence: `Bentonite clay has been used for centuries in traditional medicine and is supported by modern research:

- Studies show bentonite clay has strong absorption properties that effectively remove toxins and oils
- Research published in the International Journal of Cosmetic Science found that clay masks significantly reduce sebum and improve skin texture
- Bentonite clay has antimicrobial properties that can help reduce acne-causing bacteria
- The negative charge of bentonite attracts positively charged impurities, making it highly effective for detoxification

While specific studies on this brand are limited, the efficacy of calcium bentonite clay is well-established in dermatological literature.`,
    userExperiences: [
      {
        rating: 5,
        review: "This mask is AMAZING for my oily skin! It pulls out all the gunk from my pores. Yes, it's messy and intense, but the results are worth it. I use it once a week and my blackheads have significantly reduced.",
        author: "Jessica R.",
        skinType: "Very Oily"
      },
      {
        rating: 4,
        review: "Powerful mask that really works. Just don't overdo it—I made the mistake of using it 3 times a week and my skin got super dry. Once a week is perfect. Mix with ACV for best results.",
        author: "Brandon M.",
        skinType: "Oily, Acne-Prone"
      },
      {
        rating: 3,
        review: "Too harsh for my sensitive skin. It worked well for deep cleaning, but the redness lasted too long. I prefer gentler clay masks. Might work better for those with tougher skin.",
        author: "Emma T.",
        skinType: "Sensitive, Combination"
      },
    ],
    expertOpinion: `Aztec Secret Indian Healing Clay is a powerful treatment that I recommend with caution. For patients with very oily skin and stubborn blackheads, it can be incredibly effective. However, it's not suitable for everyone.

The key is moderation. Many patients make the mistake of using it too frequently, leading to over-dried, irritated skin. I typically recommend once weekly use, and always followed by a hydrating routine.

For sensitive skin patients, I suggest mixing with water instead of apple cider vinegar and limiting application time to 5-7 minutes. If redness persists beyond 30 minutes or if irritation occurs, discontinue use.

This mask works best as part of a balanced routine, not as a standalone treatment. Pair it with gentle cleansing, adequate hydration, and appropriate acne treatments for optimal results.`,
    bestFor: [
      'Very oily skin',
      'Stubborn blackheads',
      'Clogged pores',
      'Those seeking natural products',
      'Budget-conscious shoppers',
      'Occasional deep-cleaning treatment',
    ],
    notRecommendedFor: [
      'Sensitive skin',
      'Dry or dehydrated skin',
      'Active acne with open wounds',
      'Rosacea or eczema',
      'Those seeking gentle, daily masks',
    ],
    faq: [
      {
        question: 'Should I use apple cider vinegar or water?',
        answer: 'Apple cider vinegar is more effective but also more intense. Start with water if you have sensitive skin. You can also mix half ACV and half water for a middle ground.',
      },
      {
        question: 'Why does my face turn red?',
        answer: 'The pulsating action increases blood flow to the skin, causing temporary redness. This is normal and typically fades within 30 minutes. If it lasts longer or causes pain, you may be leaving it on too long.',
      },
      {
        question: 'How often should I use this mask?',
        answer: 'Once weekly for most people. Twice weekly maximum for very oily skin. More frequent use can damage your skin barrier and cause excessive dryness.',
      },
      {
        question: 'Can I use this on body acne?',
        answer: 'Yes! It works great on back and chest acne. Apply to affected areas and leave on for 10-15 minutes before rinsing in the shower.',
      },
    ],
  },

  // Continue with remaining products...
  'neutrogena-oil-free-acne-wash': {
    productId: 'neutrogena-oil-free-acne-wash',
    fullReview: `Neutrogena Oil-Free Acne Wash is a maximum-strength salicylic acid cleanser that has been a drugstore staple for decades. With 2% salicylic acid, this cleanser delivers prescription-level acne-fighting power at an affordable price point.

The formula is designed to penetrate deep into pores to dissolve oil, dirt, and dead skin cells that cause breakouts. The MicroClear technology helps boost the delivery of salicylic acid to where it's needed most. The result is clearer skin with fewer breakouts, blackheads, and whiteheads.

However, this is a strong cleanser that can be drying, especially for those with sensitive or combination skin. The 2% salicylic acid concentration is effective but can cause irritation if overused or if your skin is not accustomed to BHA. Many users find it works best as part of a rotation with a gentler cleanser, or used once daily rather than twice.

The orange-tinted gel has a medicinal scent that some find off-putting, though it dissipates quickly. It foams moderately and rinses clean without residue. At under $8, it's one of the most affordable acne treatments available, making it accessible for teenagers and budget-conscious adults.`,
    pros: [
      'Maximum strength 2% salicylic acid',
      'Very affordable ($7-8)',
      'Widely available in drugstores',
      'Effective for treating and preventing acne',
      'MicroClear technology for better penetration',
      'Oil-free formula',
    ],
    cons: [
      'Can be very drying',
      'May cause irritation in sensitive skin',
      'Strong medicinal scent',
      'Not suitable for daily use for some people',
      'Can cause purging initially',
    ],
    howToUse: `**Start Slowly:**
1. Begin with once daily use (evening)
2. Wet face with warm water
3. Apply small amount and massage gently
4. Rinse thoroughly
5. Follow with oil-free moisturizer

**Maintenance:**
- Increase to twice daily if tolerated
- Reduce frequency if dryness or irritation occurs
- Always use sunscreen during the day`,
    clinicalEvidence: `Salicylic acid at 2% concentration is clinically proven to treat acne effectively. Studies show it reduces both inflammatory and non-inflammatory lesions by 50-60% over 12 weeks of consistent use.`,
    userExperiences: [
      {
        rating: 4,
        review: "Works really well for my oily skin and keeps breakouts under control. Just make sure to moisturize well because it can be drying.",
        author: "Tyler J.",
        skinType: "Oily"
      },
      {
        rating: 3,
        review: "Effective but too harsh for daily use. I use it 3-4 times a week and alternate with a gentler cleanser.",
        author: "Megan K.",
        skinType: "Combination"
      },
    ],
    expertOpinion: `A solid, affordable option for oily, acne-prone skin. However, I caution patients about overuse. The 2% salicylic acid is effective but can compromise the skin barrier if used too aggressively. I typically recommend alternating with a gentle, hydrating cleanser.`,
    bestFor: ['Very oily skin', 'Moderate acne', 'Budget-conscious shoppers', 'Teenagers'],
    notRecommendedFor: ['Sensitive skin', 'Dry skin', 'Those using other strong actives'],
    faq: [
      {
        question: 'Can I use this every day?',
        answer: 'It depends on your skin. Start with once daily and increase to twice daily only if your skin tolerates it well without excessive dryness.',
      },
      {
        question: 'Why is my skin getting worse?',
        answer: 'You may be experiencing purging, which is normal in the first 2-4 weeks. If it continues beyond 6 weeks, reduce frequency or discontinue use.',
      },
    ],
  },

  'vanicream-gentle-facial-cleanser': {
    productId: 'vanicream-gentle-facial-cleanser',
    fullReview: `Vanicream Gentle Facial Cleanser is the ultimate minimalist cleanser for sensitive, acne-prone skin. With a "free-of" philosophy that eliminates common irritants, this cleanser proves that sometimes less is more.

The formula is free of dyes, fragrance, masking fragrance, lanolin, parabens, formaldehyde, and other harsh ingredients. This makes it ideal for those with sensitive skin, eczema, or who are using prescription acne treatments that can cause irritation.

Despite its gentleness, Vanicream effectively removes dirt, oil, and makeup without stripping the skin. The non-foaming formula feels creamy and soothing, leaving skin clean but not tight. It's non-comedogenic and won't clog pores, making it safe for acne-prone skin.

Dermatologists frequently recommend Vanicream for patients undergoing acne treatment with retinoids, benzoyl peroxide, or oral medications. The gentle formula won't interfere with these treatments and helps maintain the skin barrier during potentially irritating therapies.`,
    pros: [
      'Extremely gentle and non-irritating',
      'Free of common irritants and allergens',
      'Non-comedogenic',
      'Suitable for sensitive skin and eczema',
      'Works well with prescription treatments',
      'Affordable',
      'Dermatologist recommended',
    ],
    cons: [
      'Doesn\'t foam (some prefer foaming cleansers)',
      'May not remove heavy makeup effectively',
      'No active acne-fighting ingredients',
      'Plain packaging',
    ],
    howToUse: `**Morning and Evening:**
1. Wet face with lukewarm water
2. Apply cleanser and massage gently
3. Rinse thoroughly
4. Pat dry and follow with treatment products

**Best for:**
- Use as your gentle daily cleanser
- Pair with stronger acne treatments
- Safe to use twice daily`,
    clinicalEvidence: `While Vanicream doesn't contain active acne-fighting ingredients, maintaining a healthy skin barrier is crucial for acne treatment success. Studies show that gentle, non-irritating cleansers improve treatment outcomes and reduce side effects from prescription acne medications.`,
    userExperiences: [
      {
        rating: 5,
        review: "Perfect for my sensitive, acne-prone skin. It doesn't irritate or cause breakouts. I use it with Differin and it's been a game-changer.",
        author: "Lauren W.",
        skinType: "Sensitive, Acne-Prone"
      },
      {
        rating: 5,
        review: "My dermatologist recommended this when I started tretinoin. It's gentle and doesn't sting my irritated skin. Highly recommend!",
        author: "Chris B.",
        skinType: "Combination, Sensitive"
      },
    ],
    expertOpinion: `Vanicream is my go-to recommendation for patients with compromised skin barriers or those using strong prescription treatments. While it doesn't actively fight acne, it supports the skin's healing process and doesn't interfere with other treatments.`,
    bestFor: ['Sensitive skin', 'Eczema-prone skin', 'Those using prescription acne treatments', 'Compromised skin barriers'],
    notRecommendedFor: ['Those seeking active acne-fighting ingredients in cleanser', 'Very oily skin needing deep cleansing'],
    faq: [
      {
        question: 'Will this treat my acne?',
        answer: 'This cleanser doesn\'t contain active acne-fighting ingredients. It\'s designed to gently cleanse without irritation, allowing your acne treatments to work effectively.',
      },
      {
        question: 'Can I use this with tretinoin?',
        answer: 'Yes! This is an excellent choice to use alongside tretinoin or other prescription retinoids, as it won\'t add to irritation.',
      },
    ],
  },

  // Adding more product reviews to complete the set...
  'elta-md-foaming-cleanser': {
    productId: 'elta-md-foaming-cleanser',
    fullReview: `EltaMD Foaming Facial Cleanser is a professional-grade, pH-balanced enzyme cleanser that offers a luxurious cleansing experience. Popular among dermatologists and estheticians, this cleanser uses bromelain (a pineapple enzyme) and apple amino acids to gently exfoliate while cleansing.

The self-foaming pump dispenses a rich, thick foam that feels indulgent yet rinses clean without residue. Unlike traditional foaming cleansers that can be stripping, EltaMD maintains the skin's natural pH (around 5.5), preventing the dryness and tightness associated with alkaline cleansers.

The enzyme-based formula provides gentle daily exfoliation without the harshness of physical scrubs or strong chemical exfoliants. This makes it suitable even for sensitive skin. It effectively removes makeup, sunscreen, and daily impurities while supporting healthy skin barrier function.

At $32, it's positioned in the premium category, but the quality justifies the price for many users. The 7 oz pump bottle lasts 2-3 months with daily use, and the elegant packaging looks at home in any bathroom.`,
    pros: [
      'pH-balanced formula (5.5)',
      'Gentle enzyme exfoliation',
      'Luxurious foam texture',
      'Suitable for all skin types including sensitive',
      'Removes makeup and sunscreen effectively',
      'Self-foaming pump (hygienic)',
      'Professional-grade quality',
    ],
    cons: [
      'Premium price point ($32)',
      'Smaller bottle size (7 oz)',
      'May be too gentle for very oily skin',
      'Not widely available in drugstores',
    ],
    howToUse: `**Daily Routine:**
1. Pump 1-2 times into wet hands
2. Massage foam onto damp face
3. Rinse thoroughly with lukewarm water
4. Pat dry and continue with skincare routine

**Tips:**
- Use morning and evening
- One pump is usually sufficient
- Works well as second cleanse after oil cleanser`,
    clinicalEvidence: `Enzyme cleansers like this one offer gentler exfoliation compared to physical or chemical methods. Bromelain has been studied for its anti-inflammatory properties and ability to break down proteins, making it effective for removing dead skin cells without irritation.`,
    userExperiences: [
      {
        rating: 5,
        review: "Worth every penny! My skin feels clean but never stripped. The foam is so luxurious, and it doesn't irritate my sensitive skin at all.",
        author: "Patricia M.",
        skinType: "Sensitive, Combination"
      },
      {
        rating: 4,
        review: "Great cleanser, very gentle. My esthetician recommended it and I love it. Just wish it was a bit cheaper!",
        author: "Daniel F.",
        skinType: "Normal"
      },
    ],
    expertOpinion: `EltaMD Foaming Cleanser is an excellent choice for patients who want a high-quality, gentle cleanser that won't interfere with their acne treatments. The pH-balanced formula and enzyme exfoliation provide effective cleansing without disrupting the skin barrier.`,
    bestFor: ['All skin types', 'Sensitive skin', 'Those using prescription treatments', 'People who prefer premium products'],
    notRecommendedFor: ['Very oily skin needing deep cleansing', 'Budget-conscious shoppers'],
    faq: [
      {
        question: 'Is this worth the price?',
        answer: 'If you have sensitive skin or use prescription treatments, the gentle, pH-balanced formula is worth the investment. For very oily skin, more affordable options may work just as well.',
      },
    ],
  },

  // I'll add abbreviated versions for the remaining products to save space
  'paulas-choice-niacinamide': {
    productId: 'paulas-choice-niacinamide',
    fullReview: `Paula's Choice 10% Niacinamide Booster is a concentrated treatment that delivers professional-strength niacinamide along with complementary ingredients for enhanced efficacy. While The Ordinary offers a similar concentration at a fraction of the price, Paula's Choice distinguishes itself with a more elegant texture and additional beneficial ingredients like allantoin and boerhavia diffusa root extract.

The serum has a lightweight, silky texture that absorbs quickly without pilling—a common complaint with The Ordinary's version. It layers beautifully under other products and works well in both morning and evening routines. The formula is designed to be mixed with other serums or moisturizers, making it versatile for customization.

At $52, it's significantly more expensive than budget alternatives, but many users find the improved texture and additional ingredients worth the premium. The bottle includes a dropper for precise dosing, and a little goes a long way—2-3 drops are sufficient for the entire face.`,
    pros: ['Smooth, non-pilling texture', 'Additional beneficial ingredients', 'Versatile—can be mixed or used alone', 'Fragrance-free', 'Suitable for all skin types'],
    cons: ['Expensive compared to alternatives', 'Similar concentration to cheaper options', 'Smaller bottle size'],
    howToUse: `Apply 2-3 drops to face after cleansing, or mix with serum/moisturizer. Use AM and PM.`,
    clinicalEvidence: `Contains the same 10% niacinamide concentration proven effective in clinical studies, plus additional soothing ingredients.`,
    userExperiences: [
      {
        rating: 4,
        review: "Better texture than The Ordinary, but I'm not sure it's worth 10x the price. It does work well though.",
        author: "Kelly R.",
        skinType: "Combination"
      },
    ],
    expertOpinion: `A quality product, but The Ordinary offers similar efficacy at a fraction of the cost. Choose this if texture and additional ingredients matter to you.`,
    bestFor: ['Those who experienced pilling with other niacinamide serums', 'People who prefer premium formulations'],
    notRecommendedFor: ['Budget-conscious shoppers'],
    faq: [
      {
        question: 'Is this better than The Ordinary Niacinamide?',
        answer: 'It has better texture and additional ingredients, but both contain 10% niacinamide. Choose based on your budget and texture preferences.',
      },
    ],
  },

  // Continuing with more products...
  'cosrx-snail-mucin': {
    productId: 'cosrx-snail-mucin',
    fullReview: `COSRX Advanced Snail 96 Mucin Power Essence is a K-beauty cult favorite that has converted countless skeptics into believers. With 96.3% snail secretion filtrate, this essence delivers intense hydration and healing properties that are particularly beneficial for acne-prone skin dealing with post-inflammatory marks and texture issues.

Snail mucin contains glycoproteins, hyaluronic acid, and glycolic acid naturally, making it a powerhouse for skin repair and hydration. It's particularly effective for healing acne scars, reducing redness, and improving overall skin texture. The lightweight, slightly viscous texture absorbs quickly and layers well with other products.

Despite the high concentration of snail mucin, the essence is surprisingly lightweight and doesn't feel heavy or sticky. It provides lasting hydration without clogging pores, making it suitable even for oily, acne-prone skin. Many users report visible improvements in skin texture, reduced redness, and faster healing of acne marks within 2-4 weeks of consistent use.`,
    pros: ['96.3% snail secretion filtrate', 'Excellent for healing acne scars', 'Lightweight, non-greasy texture', 'Suitable for all skin types', 'Cruelty-free (snails not harmed)', 'Affordable for the quality'],
    cons: ['Texture may feel slimy initially', 'Takes time to see results (4+ weeks)', 'Not suitable for those allergic to mollusks'],
    howToUse: `Apply 2-3 drops to clean skin, pat gently to absorb. Use AM and PM. Layer under moisturizer.`,
    clinicalEvidence: `Snail mucin has been studied for its wound-healing and skin-regenerating properties. Research shows it promotes collagen production and skin repair.`,
    userExperiences: [
      {
        rating: 5,
        review: "This healed my acne scars faster than anything else I've tried. My skin is smoother and more hydrated. The texture is weird at first but you get used to it!",
        author: "Hannah L.",
        skinType: "Acne-Prone, Dehydrated"
      },
    ],
    expertOpinion: `Snail mucin is an excellent addition to acne treatment routines, particularly for those dealing with post-acne marks and dehydration. It provides healing and hydration without clogging pores.`,
    bestFor: ['Acne scars and marks', 'Dehydrated skin', 'Uneven texture', 'All skin types'],
    notRecommendedFor: ['Those allergic to mollusks', 'People uncomfortable with the ingredient'],
    faq: [
      {
        question: 'Are snails harmed to make this?',
        answer: 'No, COSRX uses a cruelty-free process where snails are placed in a dark, quiet environment where they naturally secrete mucin. They are then returned to their habitat unharmed.',
      },
    ],
  },

  // I'll create shortened versions for the remaining products to complete the set efficiently
  'good-molecules-niacinamide': {
    productId: 'good-molecules-niacinamide',
    fullReview: `Good Molecules Niacinamide Serum offers 10% niacinamide at an incredibly affordable price point of just $6. This makes it one of the most budget-friendly options for those seeking the benefits of niacinamide without breaking the bank. The formula is straightforward and effective, focusing on the star ingredient without unnecessary additives.`,
    pros: ['Extremely affordable ($6)', '10% niacinamide concentration', 'Clean ingredient list', 'Vegan and cruelty-free'],
    cons: ['Basic formulation', 'May pill with some products', 'Limited availability'],
    howToUse: `Apply 2-3 drops after cleansing, before moisturizer. Use AM and PM.`,
    clinicalEvidence: `Contains clinically effective 10% niacinamide concentration.`,
    userExperiences: [
      {
        rating: 5,
        review: "Amazing value! Works just as well as expensive brands.",
        author: "Sam T.",
        skinType: "Oily"
      },
    ],
    expertOpinion: `A solid, no-frills niacinamide serum that delivers results without the premium price tag.`,
    bestFor: ['Budget shoppers', 'Minimalists', 'Those new to niacinamide'],
    notRecommendedFor: ['Those seeking luxurious textures'],
    faq: [
      {
        question: 'How does this compare to The Ordinary?',
        answer: 'Very similar in efficacy and price. Both are excellent budget options.',
      },
    ],
  },

  'skinceuticals-silymarin-cf': {
    productId: 'skinceuticals-silymarin-cf',
    fullReview: `SkinCeuticals Silymarin CF is a premium vitamin C serum specifically formulated for oily and blemish-prone skin. At $166, it's one of the most expensive serums on the market, but it combines 15% L-ascorbic acid with silymarin (milk thistle extract), ferulic acid, and 0.5% salicylic acid for comprehensive treatment of acne, aging, and environmental damage.`,
    pros: ['Formulated specifically for oily skin', 'Combines vitamin C with acne-fighting ingredients', 'Clinically proven formula', 'Oil-free texture'],
    cons: ['Very expensive ($166)', 'Strong scent', 'May oxidize over time'],
    howToUse: `Apply 4-5 drops to clean, dry skin in the morning. Follow with sunscreen.`,
    clinicalEvidence: `SkinCeuticals vitamin C serums are backed by extensive research showing significant improvements in skin tone, texture, and protection against environmental damage.`,
    userExperiences: [
      {
        rating: 5,
        review: "Expensive but worth it for my oily, acne-prone skin. Brightens and prevents breakouts.",
        author: "Michelle K.",
        skinType: "Oily, Acne-Prone"
      },
    ],
    expertOpinion: `An excellent choice for patients who can afford it and have oily, acne-prone skin. The combination of ingredients is scientifically sound and effective.`,
    bestFor: ['Oily, acne-prone skin', 'Those seeking anti-aging benefits', 'People who can afford premium products'],
    notRecommendedFor: ['Budget-conscious shoppers', 'Dry skin'],
    faq: [
      {
        question: 'Is this worth the price?',
        answer: 'If you have oily, acne-prone skin and want a vitamin C serum, this is one of the best formulated options. However, more affordable alternatives exist.',
      },
    ],
  },

  // Adding final products with abbreviated content
  'exposed-skincare-clearing-tonic': {
    productId: 'exposed-skincare-clearing-tonic',
    fullReview: `Exposed Skincare Clearing Tonic is a powerful exfoliating treatment that combines 2% salicylic acid with glycolic acid and soothing botanical extracts. This dual-acid approach provides both surface and deep pore exfoliation, making it highly effective for treating stubborn acne and preventing future breakouts.

The formula includes green tea extract, sage extract, and passion flower to calm inflammation while the acids work to unclog pores. This balance of active and soothing ingredients makes it more tolerable than many single-acid treatments. The tonic has a lightweight, water-like texture that absorbs quickly without leaving residue.`,
    pros: ['Dual-acid formula (salicylic + glycolic)', 'Contains soothing botanicals', 'Effective for stubborn acne', 'Part of complete Exposed system'],
    cons: ['Can be drying if overused', 'Requires gradual introduction', 'Higher price than drugstore alternatives'],
    howToUse: `Apply to clean skin with cotton pad, avoiding eye area. Start every other night, increase to nightly as tolerated.`,
    clinicalEvidence: `Combination of BHA and AHA has been shown to be more effective than either acid alone for treating acne and improving texture.`,
    userExperiences: [
      {
        rating: 5,
        review: "Best toner I've ever used! Cleared my stubborn acne in 6 weeks.",
        author: "Ryan P.",
        skinType: "Oily, Acne-Prone"
      },
    ],
    expertOpinion: `A well-formulated dual-acid treatment that's effective for moderate to severe acne. The addition of soothing ingredients helps minimize irritation.`,
    bestFor: ['Stubborn acne', 'Oily skin', 'Those seeking professional-grade treatment'],
    notRecommendedFor: ['Sensitive skin', 'Those new to acids'],
    faq: [
      {
        question: 'Can I use this with retinoids?',
        answer: 'Yes, but use them at different times (tonic in AM, retinoid in PM) and introduce gradually.',
      },
    ],
  },

  'neutrogena-stubborn-acne': {
    productId: 'benzoyl-peroxide-gel',
    fullReview: `Neutrogena Stubborn Acne AM Treatment combines 2.5% benzoyl peroxide with hyaluronic acid for a gentler approach to acne treatment. Unlike traditional benzoyl peroxide products that can be extremely drying, this formula includes hydrating ingredients to minimize irritation while still effectively killing acne-causing bacteria.`,
    pros: ['Lower concentration (2.5%) reduces irritation', 'Contains hyaluronic acid for hydration', 'Affordable', 'Can be used daily'],
    cons: ['May bleach fabrics', 'Can still cause dryness', 'Not strong enough for severe acne'],
    howToUse: `Apply thin layer to affected areas in the morning after cleansing. Follow with moisturizer and sunscreen.`,
    clinicalEvidence: `Studies show 2.5% benzoyl peroxide is as effective as higher concentrations but with less irritation.`,
    userExperiences: [
      {
        rating: 4,
        review: "Works well without the extreme dryness of other BP products. Good for daily use.",
        author: "Jake M.",
        skinType: "Combination"
      },
    ],
    expertOpinion: `A good option for those who need benzoyl peroxide but have experienced irritation with higher concentrations.`,
    bestFor: ['Mild to moderate acne', 'Sensitive skin', 'Daily use'],
    notRecommendedFor: ['Severe acne', 'Very dry skin'],
    faq: [
      {
        question: 'Will this bleach my pillowcase?',
        answer: 'Yes, benzoyl peroxide can bleach fabrics. Use white pillowcases or apply in the morning only.',
      },
    ],
  },

  'azelaic-acid-suspension': {
    productId: 'azelaic-acid-suspension',
    fullReview: `The Ordinary Azelaic Acid Suspension 10% is a multitasking treatment that addresses acne, rosacea, and hyperpigmentation simultaneously. Azelaic acid is a unique ingredient that kills acne-causing bacteria, reduces inflammation, and brightens dark spots—all while being gentle enough for sensitive skin.

The cream-gel texture is slightly grainy due to the high concentration of azelaic acid in suspension. Some users find this texture off-putting, but it smooths out upon application. The formula is silicone-based, which helps it spread easily and creates a slight blurring effect on the skin.`,
    pros: ['Multi-purpose (acne, rosacea, hyperpigmentation)', 'Gentle yet effective', 'Affordable', 'Suitable for sensitive skin'],
    cons: ['Grainy texture', 'May pill under makeup', 'Lower concentration than prescription versions'],
    howToUse: `Apply to clean skin PM only. Can be used AM if no irritation occurs. Follow with moisturizer.`,
    clinicalEvidence: `Azelaic acid at 10-20% has been clinically proven to treat acne, reduce post-inflammatory hyperpigmentation, and improve rosacea symptoms.`,
    userExperiences: [
      {
        rating: 4,
        review: "Great for fading acne marks! The texture is weird but it works. My dark spots are much lighter after 8 weeks.",
        author: "Priya S.",
        skinType: "Combination, Acne-Prone"
      },
    ],
    expertOpinion: `Azelaic acid is an underrated ingredient that I recommend frequently. It's particularly useful for patients with both acne and hyperpigmentation, or those with rosacea.`,
    bestFor: ['Acne and hyperpigmentation', 'Rosacea', 'Sensitive skin', 'Post-acne marks'],
    notRecommendedFor: ['Those who dislike textured products'],
    faq: [
      {
        question: 'Can I use this with other actives?',
        answer: 'Yes, azelaic acid is generally well-tolerated with other actives. It can be used with retinoids, vitamin C, and niacinamide.',
      },
    ],
  },

  // Final products
  'innisfree-super-volcanic-mask': {
    productId: 'innisfree-super-volcanic-mask',
    fullReview: `Innisfree Super Volcanic Pore Clay Mask harnesses the power of Jeju volcanic clusters to absorb excess sebum and purify pores. This K-beauty favorite offers a gentler alternative to Aztec Clay while still providing deep-cleaning benefits.`,
    pros: ['Gentler than Aztec Clay', 'Contains AHA for exfoliation', 'Pleasant texture', 'Doesn\'t cause extreme redness'],
    cons: ['Less intense than Aztec Clay', 'Smaller jar size', 'May not be strong enough for very oily skin'],
    howToUse: `Apply thick layer to clean skin, leave 10-15 minutes, rinse. Use 1-2 times weekly.`,
    clinicalEvidence: `Volcanic clay has strong absorption properties effective for oil control and pore cleansing.`,
    userExperiences: [
      {
        rating: 5,
        review: "Perfect balance of effective and gentle. My pores look smaller and skin is less oily.",
        author: "Yuki T.",
        skinType: "Oily"
      },
    ],
    expertOpinion: `A good middle-ground option for those who find Aztec Clay too harsh but still want deep-cleaning benefits.`,
    bestFor: ['Oily skin', 'Large pores', 'Those seeking gentler clay masks'],
    notRecommendedFor: ['Very stubborn blackheads', 'Those seeking most intense treatment'],
    faq: [
      {
        question: 'How does this compare to Aztec Clay?',
        answer: 'It\'s gentler and more pleasant to use, but less intense. Choose based on your skin\'s tolerance.',
      },
    ],
  },

  'origins-clear-improvement-mask': {
    productId: 'origins-clear-improvement-mask',
    fullReview: `Origins Clear Improvement Active Charcoal Mask combines activated charcoal with white China clay for effective pore purification. This mask has a cult following for its ability to draw out impurities while being gentler than pure clay masks.`,
    pros: ['Activated charcoal draws out impurities', 'Gentler than pure clay masks', 'Pleasant cooling sensation', 'Suitable for all skin types'],
    cons: ['Mid-range price', 'May not be strong enough for very oily skin', 'Contains fragrance'],
    howToUse: `Apply to clean skin, leave 10-15 minutes until dry, rinse with warm water. Use 1-2 times weekly.`,
    clinicalEvidence: `Activated charcoal has strong absorption properties that effectively remove toxins and impurities from skin.`,
    userExperiences: [
      {
        rating: 4,
        review: "Love this mask! It cleans my pores without over-drying. The cooling sensation is nice too.",
        author: "Olivia R.",
        skinType: "Combination"
      },
    ],
    expertOpinion: `A well-formulated charcoal mask that provides effective cleansing without excessive dryness. Good for weekly maintenance.`,
    bestFor: ['All skin types', 'Weekly deep cleansing', 'Those seeking gentler masks'],
    notRecommendedFor: ['Very oily skin needing intense treatment', 'Fragrance-sensitive individuals'],
    faq: [
      {
        question: 'How often should I use this?',
        answer: 'Once or twice weekly is ideal. More frequent use isn\'t necessary and may cause dryness.',
      },
    ],
  },

  'glamglow-supermud-mask': {
    productId: 'glamglow-supermud-mask',
    fullReview: `GLAMGLOW SUPERMUD is a luxury treatment mask that combines six acids with activated charcoal for instant pore-clearing results. This professional-grade mask is popular among celebrities and makeup artists for its visible, immediate effects.`,
    pros: ['Instant visible results', 'Combines multiple effective ingredients', 'Professional-grade formula', 'Works on face and body'],
    cons: ['Very expensive ($59)', 'Small jar size', 'Strong tingling sensation', 'Contains fragrance'],
    howToUse: `Apply thin layer to clean skin, leave 15-20 minutes, rinse. Use 1-2 times weekly.`,
    clinicalEvidence: `Combination of acids and charcoal provides both chemical and physical pore cleansing.`,
    userExperiences: [
      {
        rating: 4,
        review: "Expensive but works instantly. My skin looks amazing after using it. Save it for special occasions!",
        author: "Victoria L.",
        skinType: "Oily"
      },
    ],
    expertOpinion: `An effective luxury mask that delivers visible results. However, more affordable options can provide similar benefits with consistent use.`,
    bestFor: ['Special occasions', 'Those seeking instant results', 'Professional use'],
    notRecommendedFor: ['Budget-conscious shoppers', 'Sensitive skin', 'Daily use'],
    faq: [
      {
        question: 'Is this worth the price?',
        answer: 'It works well, but similar results can be achieved with more affordable masks used consistently. Consider it a luxury treat rather than a necessity.',
      },
    ],
  },

  'laneige-water-sleeping-mask': {
    productId: 'laneige-water-sleeping-mask',
    fullReview: `LANEIGE Water Sleeping Mask is an overnight hydrating treatment that purifies and moisturizes while you sleep. Unlike traditional clay masks, this is a leave-on gel mask that provides intense hydration—perfect for acne-prone skin that's become dehydrated from treatments.`,
    pros: ['Intense overnight hydration', 'Doesn\'t clog pores', 'Pleasant texture and scent', 'Suitable for all skin types', 'Wakes up skin looking refreshed'],
    cons: ['Not a treatment mask for acne', 'May be too rich for very oily skin', 'Contains fragrance', 'Mid-range price'],
    howToUse: `Apply as last step of PM routine, leave on overnight, rinse in morning. Use 2-3 times weekly or nightly as needed.`,
    clinicalEvidence: `Hydration is crucial for skin barrier function and overall skin health, particularly when using acne treatments that can cause dryness.`,
    userExperiences: [
      {
        rating: 5,
        review: "My skin is so plump and hydrated in the morning! Perfect for counteracting the dryness from my acne treatments.",
        author: "Grace H.",
        skinType: "Dehydrated, Acne-Prone"
      },
    ],
    expertOpinion: `An excellent hydrating mask for patients whose skin has become dehydrated from acne treatments. Provides necessary moisture without clogging pores.`,
    bestFor: ['Dehydrated skin', 'Those using drying acne treatments', 'All skin types', 'Overnight hydration'],
    notRecommendedFor: ['Very oily skin', 'Those seeking acne treatment'],
    faq: [
      {
        question: 'Will this cause breakouts?',
        answer: 'No, it\'s non-comedogenic and specifically formulated not to clog pores. Many acne-prone users love it for hydration.',
      },
    ],
  },
};

export function getProductReview(productId: string): ProductReview | undefined {
  return productReviews[productId];
}
