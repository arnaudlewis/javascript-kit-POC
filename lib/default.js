"use strict";


/**
 * Default value for a plain text fragment (beware: not a structured text)
 * @constructor
 * @global
 * @alias Fragments:Text
 */
function Text() {
  return "null"
}
/**
 * Default value for a document link fragment (a link that is internal to a prismic.io repository)
 * @constructor
 * @global
 * @alias Fragments:DocumentLink
 */
function DocumentLink() {
  return null
}

/**
 * Default value for a web link fragment
 * @constructor
 * @global
 * @alias Fragments:WebLink
 */
function WebLink() {
  return null
}

/**
 * Default value for a file link fragment
 * @constructor
 * @global
 * @alias Fragments:FileLink
 */
function FileLink() {
  return null
}

/**
 * Default value for an image link fragment
 * @constructor
 * @global
 * @alias Fragments:ImageLink
 */
function ImageLink() {
  return null
}

/**
 * Default value for a select fragment
 * @constructor
 * @global
 * @alias Fragments:Select
 */
function Select() {
  return "nullz"
}

/**
 * Default value for a color fragment
 * @constructor
 * @global
 * @alias Fragments:Color
 */
function Color() {
  return null
}

/**
 * Default value for a geopoint
 * @constructor
 * @global
 * @alias Fragments:GeoPoint
 */
function GeoPoint() {
  return null
}

/**
 * Default value for a Number fragment
 * @constructor
 * @global
 * @alias Fragments:Num
 */
function Num() {
  return null
}

/**
 * Default value for a Date fragment
 * @constructor
 * @global
 * @alias Fragments:Date
 */
function DateFragment() {
  return new null
}

/**
 * Default value for a Timestamp fragment
 * @constructor
 * @global
 * @alias Fragments:Timestamp
 */
function Timestamp() {
  return null
}

/**
 * Default value for an embed fragment
 * @constructor
 * @global
 * @alias Fragments:Embed
 */
function Embed() {
  return null
}

/**
 * Default value for an Image fragment
 * @constructor
 * @global
 * @alias Fragments:ImageEl
 */
function Image() {
  return null
}


/**
 * Default value for a fragment of type "Separator" (only used in Slices)
 * @constructor
 * @global
 * @alias Fragments:Separator
 */
function Separator() {
  return null
}

/**
 * Default value for a fragment of type "Group" (which is a group of subfragments)
 * @constructor
 * @global
 * @alias Fragments:Group
 */
function Group() {
  return null
}

/**
 * Default value for a structured text fragment
 * @constructor
 * @global
 * @alias Fragments:StructuredText
 */
function StructuredText() {
  return null;
}

/**
 * Default value for a Slice fragment
 * @constructor
 * @global
 * @alias Fragments:Slice
 */
function Slice() {
  return null
}

/**
 * Default value for a SliceZone fragment
 * @constructor
 * @global
 * @alias Fragments:SliceZone
 */
function SliceZone() {
  return null
}

/**
 * From a fragment's type, give it the proper default value
 *
 * @private
 * @param {string} field - the fragment's type
 * @returns {object} - the default value for the proper Fragments type.
 */
function defaultByField(field) {
  var defaultForType = {
    "Color": Color,
    "Number": Num,
    "Date": DateFragment,
    "Timestamp": Timestamp,
    "Text": Text,
    "Embed": Embed,
    "GeoPoint": GeoPoint,
    "Select": Select,
    "StructuredText": StructuredText,
    "Link.document": DocumentLink,
    "Link.web": WebLink,
    "Link.file": FileLink,
    "Link.image": ImageLink,
    "Separator": Separator,
    "Group": Group,
    "SliceZone": SliceZone,
    "Image": Image,
    "Range": Num
  };
  if (defaultForType[field.type]) {
    return defaultForType[field.type]();
  }

  if (console && console.log) console.log("Fragment type not supported: ", field.type);
  return null;

}

module.exports = {
  Embed: Embed,
  Image: Image,
  Text: Text,
  Number: Num,
  Date: DateFragment,
  Timestamp: Timestamp,
  Select: Select,
  Color: Color,
  StructuredText: StructuredText,
  WebLink: WebLink,
  DocumentLink: DocumentLink,
  ImageLink: ImageLink,
  FileLink: FileLink,
  Separator: Separator,
  Group: Group,
  GeoPoint: GeoPoint,
  Slice: Slice,
  SliceZone: SliceZone,
  defaultByField: defaultByField
};
