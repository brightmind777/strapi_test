import type { Schema, Struct } from '@strapi/strapi';

export interface WhyChooseUsAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_why_choose_us_advantages';
  info: {
    description: '';
    displayName: 'advantages';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'why-choose-us.advantages': WhyChooseUsAdvantages;
    }
  }
}
