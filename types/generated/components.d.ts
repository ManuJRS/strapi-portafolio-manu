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

export interface ComponentsCardmedia extends Struct.ComponentSchema {
  collectionName: 'components_components_cardmedias';
  info: {
    displayName: 'cardmedia';
    icon: 'picture';
  };
  attributes: {
    linktext: Schema.Attribute.String;
    linkurl: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
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

export interface ComponentsContentTextList extends Struct.ComponentSchema {
  collectionName: 'components_components_content_text_lists';
  info: {
    displayName: 'ContentTextList';
    icon: 'bulletList';
  };
  attributes: {
    list: Schema.Attribute.Component<'shared.listitem', true>;
    showlist: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Text: Schema.Attribute.Text;
  };
}

export interface ComponentsDescriptionProject extends Struct.ComponentSchema {
  collectionName: 'components_components_description_projects';
  info: {
    displayName: 'DescriptionProject';
    icon: 'alien';
  };
  attributes: {
    rol: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Mi papel'>;
    roltext: Schema.Attribute.String;
    stack: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Tecnolog\u00EDa utilizada'>;
    stacktext: Schema.Attribute.String;
    time: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Tiempo total'>;
    timetext: Schema.Attribute.String;
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

export interface ComponentsIntroProject extends Struct.ComponentSchema {
  collectionName: 'components_components_intro_projects';
  info: {
    displayName: 'IntroProject';
    icon: 'message';
  };
  attributes: {
    level: Schema.Attribute.Enumeration<['h1', 'h2', 'h3']>;
    textIntro: Schema.Attribute.Text;
    titleIntro: Schema.Attribute.String;
    uppercase: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ComponentsTitleDivisor extends Struct.ComponentSchema {
  collectionName: 'components_components_title_divisors';
  info: {
    displayName: 'titleDivisor';
    icon: 'plus';
  };
  attributes: {
    titleDivisor: Schema.Attribute.String;
  };
}

export interface NavigationNavLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_nav_links';
  info: {
    displayName: 'nav-link';
    icon: 'car';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedIconTec extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_tecs';
  info: {
    displayName: 'iconTec';
    icon: 'star';
  };
  attributes: {
    imageicon: Schema.Attribute.Media<'images' | 'files'>;
    texticon: Schema.Attribute.String;
  };
}

export interface SharedListitem extends Struct.ComponentSchema {
  collectionName: 'components_shared_listitems';
  info: {
    displayName: 'listitem';
    icon: 'stack';
  };
  attributes: {
    bullet: Schema.Attribute.Text;
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
      'components.cardmedia': ComponentsCardmedia;
      'components.content-intro': ComponentsContentIntro;
      'components.content-text-list': ComponentsContentTextList;
      'components.description-project': ComponentsDescriptionProject;
      'components.incon-arrrow': ComponentsInconArrrow;
      'components.intro-project': ComponentsIntroProject;
      'components.title-divisor': ComponentsTitleDivisor;
      'navigation.nav-link': NavigationNavLink;
      'shared.icon-tec': SharedIconTec;
      'shared.listitem': SharedListitem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
