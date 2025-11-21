import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsCardPreview extends Struct.ComponentSchema {
  collectionName: 'components_components_card_previews';
  info: {
    displayName: 'CardPreview';
    icon: 'layout';
  };
  attributes: {
    cardLayout: Schema.Attribute.Enumeration<['collapse', 'extended']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'extended'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    imageFit: Schema.Attribute.Enumeration<['cover', 'contain']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'cover'>;
    intro: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsContentIntro extends Struct.ComponentSchema {
  collectionName: 'components_components_content_intros';
  info: {
    displayName: 'ContentIntro';
    icon: 'house';
  };
  attributes: {
    h1Font: Schema.Attribute.Enumeration<['anton', 'roboto-mono']> &
      Schema.Attribute.DefaultTo<'anton'>;
    h1Uppercase: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    h3Font: Schema.Attribute.Enumeration<['anton', 'roboto-mono']> &
      Schema.Attribute.DefaultTo<'roboto-mono'>;
    linkLabel1: Schema.Attribute.String;
    linkLabel2: Schema.Attribute.String;
    linkUrl1: Schema.Attribute.String;
    linkUrl2: Schema.Attribute.String;
    showCollapse: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    titleh1: Schema.Attribute.String & Schema.Attribute.Required;
    titleh2: Schema.Attribute.String;
    titleh3: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsInconArrrow extends Struct.ComponentSchema {
  collectionName: 'components_components_incon_arrrows';
  info: {
    displayName: 'InconArrrow';
    icon: 'arrowDown';
  };
  attributes: {
    textArrow: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.card-preview': ComponentsCardPreview;
      'components.content-intro': ComponentsContentIntro;
      'components.incon-arrrow': ComponentsInconArrrow;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
