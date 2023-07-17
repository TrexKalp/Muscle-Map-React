import React, { useState } from "react";
import ImageMapper from "react-img-mapper";
import map from "../assets/images/musclemap3.png";
import "./ImageMapComponent.css";

const ImageMapComponent: React.FC = () => {
  const areas = [
    {
      name: "bicep",
      shape: "poly",
      coords: [
        117, 274, 128, 270, 136, 266, 146, 256, 154, 235, 155, 226, 157, 211,
        147, 204, 139, 206, 132, 208, 125, 214, 119, 224, 115, 235, 114, 256,
        116, 272,
      ], // Example coordinates
      href: "https://www.google.com/",
      alt: "Area 1",
      className: "bicep",
    },
    {
      name: "bicep",
      shape: "poly",
      coords: [
        320, 273, 324, 257, 323, 245, 321, 234, 318, 225, 316, 218, 310, 212,
        304, 210, 296, 205, 290, 202, 281, 208, 281, 217, 282, 229, 283, 240,
        287, 251, 292, 261, 304, 268,
      ], // Example coordinates
      href: "#",
      alt: "Area 1",
      className: "bicep",
    },
    {
      name: "abs",
      shape: "poly",
      coords: [
        216, 374, 223, 374, 230, 370, 235, 355, 240, 341, 242, 329, 245, 318,
        245, 308, 248, 300, 250, 291, 250, 281, 252, 268, 250, 255, 251, 243,
        250, 233, 248, 223, 240, 219, 231, 218, 224, 216, 218, 218, 212, 218,
        204, 219, 193, 221, 186, 222, 183, 234, 183, 248, 183, 262, 182, 279,
        184, 294, 188, 312, 191, 327, 193, 339, 196, 351, 200, 362, 206, 372,
      ], // Example coordinates
      href: "#",
      alt: "abs",
    },
    {
      name: "forearms",
      shape: "poly",
      coords: [
        71, 339, 85, 350, 88, 344, 93, 336, 99, 327, 104, 321, 111, 314, 118,
        308, 124, 303, 131, 295, 136, 287, 139, 279, 141, 267, 133, 268, 123,
        273, 117, 274, 113, 262, 112, 254, 103, 262, 95, 275, 87, 298,
      ], // Example coordinates
      href: "#",
      alt: "forearms",
    },
    {
      name: "forearms",
      shape: "poly",
      coords: [
        296, 267, 298, 279, 303, 293, 310, 303, 318, 310, 327, 317, 335, 325,
        342, 334, 347, 342, 350, 350, 355, 346, 361, 342, 366, 339, 363, 331,
        360, 322, 357, 313, 352, 303, 349, 294, 345, 284, 342, 275, 337, 267,
        331, 260, 325, 256, 321, 273,
      ], // Example coordinates
      href: "#",
      alt: "forearms",
    },
    {
      name: "chest",
      shape: "poly",
      coords: [
        149, 203, 153, 196, 158, 190, 162, 185, 165, 179, 170, 174, 174, 169,
        180, 166, 186, 165, 191, 165, 196, 167, 201, 170, 206, 174, 212, 179,
        214, 187, 215, 198, 216, 207, 215, 215, 208, 217, 201, 218, 194, 219,
        187, 220, 180, 221, 173, 219, 162, 215,
      ], // Example coordinates
      href: "#",
      alt: "chest",
    },
    {
      name: "chest",
      shape: "poly",
      coords: [
        225, 181, 229, 175, 235, 170, 241, 167, 248, 163, 255, 163, 261, 168,
        268, 174, 274, 183, 280, 192, 286, 199, 284, 207, 273, 215, 263, 220,
        255, 222, 243, 221, 227, 217, 221, 214, 222, 203, 223, 191,
      ], // Example coordinates
      href: "#",
      alt: "chest",
    },
    {
      name: "delts",
      shape: "poly",
      coords: [
        127, 207, 125, 195, 126, 183, 130, 174, 134, 166, 141, 160, 148, 156,
        154, 156, 161, 155, 167, 155, 174, 156, 184, 161, 178, 165, 170, 171,
        164, 180, 157, 191, 150, 200, 139, 206, 129, 212,
      ], // Example coordinates
      href: "#",
      alt: "delts",
    },
    {
      name: "delts",
      shape: "poly",
      coords: [
        285, 157, 291, 160, 296, 162, 302, 165, 308, 171, 310, 182, 312, 191,
        312, 202, 309, 211, 299, 207, 293, 202, 288, 203, 276, 184, 268, 173,
        261, 166, 254, 163, 259, 156, 291, 160,
      ], // Example coordinates
      href: "#",
      alt: "delts",
    },
    {
      name: "traps",
      shape: "poly",
      coords: [
        198, 126, 200, 133, 203, 142, 206, 149, 210, 157, 212, 164, 204, 160,
        197, 159, 189, 157, 181, 156, 172, 155, 184, 149, 191, 145, 195, 138,
      ], // Example coordinates
      href: "#",
      alt: "traps",
    },
    {
      name: "traps",
      shape: "poly",
      coords: [
        226, 165, 227, 156, 232, 148, 235, 139, 237, 132, 240, 123, 243, 140,
        248, 147, 254, 152, 260, 153, 267, 156, 253, 157, 240, 159,
      ], // Example coordinates
      href: "#",
      alt: "traps",
    },
    {
      name: "obliques",
      shape: "poly",
      coords: [
        162, 323, 162, 310, 163, 296, 164, 282, 165, 270, 165, 259, 163, 249,
        159, 239, 156, 232, 157, 219, 158, 212, 167, 217, 176, 220, 185, 222,
        183, 238, 183, 248, 183, 265, 183, 277, 183, 287, 186, 300, 189, 319,
        192, 333, 194, 347, 200, 361, 180, 338,
      ], // Example coordinates
      href: "#",
      alt: "obliques",
    },
    {
      name: "obliques",
      shape: "poly",
      coords: [
        250, 224, 258, 223, 265, 219, 270, 217, 279, 213, 282, 228, 282, 238,
        276, 243, 273, 254, 271, 264, 273, 276, 274, 289, 276, 305, 275, 317,
        275, 324, 269, 328, 261, 334, 254, 342, 245, 351, 239, 360, 233, 365,
        241, 343, 245, 320, 248, 302, 252, 278, 252, 250,
      ], // Example coordinates
      href: "#",
      alt: "obliques",
    },
    {
      name: "quads",
      shape: "poly",
      coords: [
        163, 325, 158, 337, 154, 350, 149, 367, 145, 383, 144, 405, 143, 424,
        143, 434, 146, 445, 151, 456, 156, 470, 162, 480, 167, 476, 170, 468,
        176, 476, 182, 484, 189, 487, 195, 490, 196, 477, 199, 467, 202, 458,
        206, 446, 207, 437, 209, 427, 210, 417, 211, 408, 214, 397, 214, 387,
        210, 377, 199, 359, 182, 338,
      ], // Example coordinates
      href: "#",
      alt: "quads",
    },
    {
      name: "quads",
      shape: "poly",
      coords: [
        242, 490, 242, 481, 237, 470, 234, 457, 232, 446, 229, 432, 228, 421,
        227, 411, 225, 399, 223, 388, 226, 378, 230, 372, 235, 366, 240, 358,
        246, 351, 252, 343, 259, 336, 265, 332, 272, 326, 276, 325, 281, 338,
        284, 351, 287, 361, 290, 371, 291, 383, 293, 395, 293, 407, 295, 420,
        294, 433, 292, 445, 287, 456, 283, 467, 275, 481, 268, 469, 258, 482,
      ], // Example coordinates
      href: "#",
      alt: "quads",
    },
    {
      name: "calves",
      shape: "poly",
      coords: [
        162, 633, 158, 622, 155, 607, 152, 596, 150, 584, 150, 574, 149, 563,
        149, 554, 149, 543, 149, 533, 149, 517, 146, 526, 144, 538, 143, 546,
        140, 556, 140, 569, 138, 579, 139, 590, 142, 602, 143, 612, 146, 623,
        147, 632, 149, 644, 144, 651, 141, 661, 137, 670, 133, 680, 127, 687,
        126, 695, 132, 697, 139, 699, 144, 699, 149, 699, 154, 698, 161, 695,
        163, 689, 164, 680, 167, 673, 171, 666, 167, 647, 167, 631, 167, 619,
        170, 607, 175, 598, 179, 586, 182, 576, 185, 563, 186, 553, 186, 544,
        188, 533, 188, 523, 183, 530, 178, 539, 173, 551, 169, 562, 167, 574,
        165, 588, 164, 603,
      ], // Example coordinates
      href: "#",
      alt: "calves",
    },
    {
      name: "calves",
      shape: "poly",
      coords: [
        276, 634, 279, 625, 281, 615, 283, 604, 285, 593, 286, 581, 288, 568,
        288, 556, 288, 545, 288, 534, 289, 516, 292, 534, 297, 551, 299, 565,
        299, 578, 298, 588, 298, 601, 295, 612, 292, 623, 290, 635, 289, 646,
        294, 655, 298, 665, 300, 673, 305, 680, 311, 686, 311, 694, 304, 695,
        297, 696, 291, 697, 285, 697, 279, 695, 274, 689, 273, 678, 269, 671,
        266, 663, 272, 643, 272, 626, 270, 614, 267, 606, 263, 599, 260, 591,
        257, 583, 255, 574, 253, 565, 253, 556, 252, 548, 252, 539, 251, 525,
        257, 535, 263, 548, 267, 562, 270, 575, 274, 593, 275, 609,
      ], // Example coordinates
      href: "#",
      alt: "calves",
    },
    {
      name: "trapsb",
      shape: "poly",
      coords: [
        597, 141, 609, 134, 617, 126, 626, 113, 632, 114, 637, 114, 642, 114,
        649, 114, 654, 113, 657, 120, 662, 126, 669, 133, 674, 137, 682, 142,
        670, 139, 654, 135, 641, 132, 632, 136, 620, 138, 609, 140,
      ], // Example coordinates
      href: "#",
      alt: "trapsb",
    },
    {
      name: "deltb",
      shape: "poly",
      coords: [
        543, 201, 542, 190, 542, 178, 544, 168, 551, 159, 558, 153, 569, 147,
        581, 145, 589, 145, 597, 145, 602, 153, 590, 164, 579, 169, 572, 177,
        572, 185, 558, 191, 550, 195,
      ], // Example coordinates
      href: "#",
      alt: "deltb",
    },
    {
      name: "deltb",
      shape: "poly",
      coords: [
        739, 201, 740, 187, 738, 172, 733, 162, 727, 155, 720, 150, 712, 145,
        703, 144, 694, 143, 684, 144, 680, 150, 690, 160, 700, 168, 708, 171,
        712, 180, 711, 184, 721, 188, 730, 193,
      ], // Example coordinates
      href: "#",
      alt: "deltb",
    },
    {
      name: "upperb",
      shape: "poly",
      coords: [
        641, 251, 635, 242, 631, 233, 625, 225, 621, 216, 617, 210, 614, 200,
        613, 188, 612, 176, 610, 166, 605, 155, 598, 146, 605, 142, 612, 140,
        620, 139, 626, 137, 634, 134, 641, 132, 648, 135, 656, 138, 663, 139,
        672, 141, 677, 142, 683, 145, 677, 155, 671, 166, 670, 180, 668, 199,
        664, 211, 654, 227, 647, 239,
      ], // Example coordinates
      href: "#",
      alt: "upperb",
    },
    {
      name: "shoulders",
      shape: "poly",
      coords: [
        612, 201, 606, 201, 599, 206, 593, 209, 586, 209, 579, 207, 574, 202,
        571, 194, 571, 186, 571, 178, 573, 172, 578, 169, 583, 167, 589, 164,
        593, 159, 599, 152, 605, 156, 609, 166, 613, 177, 613, 189,
      ], // Example coordinates
      href: "#",
      alt: "shoulders",
    },
    {
      name: "shoulders",
      shape: "poly",
      coords: [
        669, 202, 675, 201, 680, 204, 686, 209, 691, 211, 697, 210, 702, 208,
        707, 204, 708, 196, 710, 189, 710, 183, 709, 176, 705, 170, 699, 167,
        692, 163, 686, 157, 681, 153, 675, 160, 671, 170, 668, 185,
      ], // Example coordinates
      href: "#",
      alt: "shoulders",
    },
    {
      name: "lats",
      shape: "poly",
      coords: [
        575, 206, 577, 228, 580, 251, 582, 266, 586, 281, 587, 299, 585, 315,
        602, 311, 610, 304, 616, 293, 617, 281, 617, 272, 621, 263, 626, 258,
        632, 254, 640, 251, 647, 253, 653, 256, 659, 261, 663, 269, 665, 280,
        666, 290, 669, 299, 677, 310, 686, 313, 697, 316, 695, 295, 695, 284,
        698, 266, 702, 251, 702, 241, 705, 227, 707, 208, 694, 211, 679, 202,
        670, 201, 663, 212, 656, 224, 650, 235, 641, 251, 634, 240, 628, 228,
        623, 218, 618, 208, 614, 201, 606, 201, 601, 206, 590, 211,
      ], // Example coordinates
      href: "#",
      alt: "lats",
    },
    {
      name: "lowerb",
      shape: "poly",
      coords: [
        605, 313, 612, 314, 618, 317, 624, 320, 630, 323, 634, 327, 640, 339,
        645, 332, 650, 324, 656, 319, 663, 317, 669, 315, 676, 312, 671, 304,
        666, 293, 664, 284, 664, 275, 662, 268, 658, 259, 651, 255, 645, 252,
        637, 252, 628, 256, 622, 262, 616, 275, 616, 288, 614, 299, 609, 305,
        605, 311,
      ], // Example coordinates
      href: "#",
      alt: "lowerb",
    },
    {
      name: "glutes",
      shape: "poly",
      coords: [
        585, 318, 580, 341, 574, 356, 571, 371, 577, 365, 578, 380, 581, 393,
        588, 397, 595, 401, 605, 403, 613, 405, 622, 404, 635, 403, 636, 393,
        641, 382, 644, 388, 646, 401, 653, 403, 665, 404, 677, 404, 687, 400,
        694, 397, 701, 389, 704, 380, 704, 368, 710, 371, 707, 355, 703, 341,
        700, 329, 697, 319, 685, 313, 679, 311, 673, 314, 664, 316, 652, 322,
        646, 331, 641, 337, 632, 326, 621, 317, 609, 313, 595, 313,
      ], // Example coordinates
      href: "#",
      alt: "glutes",
    },
    {
      name: "hamstrings",
      shape: "poly",
      coords: [
        564, 505, 574, 500, 583, 520, 585, 511, 591, 521, 598, 536, 604, 526,
        609, 511, 612, 498, 616, 483, 619, 472, 624, 458, 629, 446, 633, 429,
        635, 416, 635, 404, 623, 405, 611, 404, 598, 402, 587, 397, 579, 388,
        578, 374, 577, 364, 570, 372, 567, 388, 567, 408, 567, 428, 568, 448,
        570, 471, 568, 487,
      ], // Example coordinates
      href: "#",
      alt: "hamstrings",
    },
    {
      name: "hamstrings",
      shape: "poly",
      coords: [
        685, 534, 677, 522, 672, 509, 668, 495, 665, 478, 661, 466, 656, 452,
        652, 440, 648, 429, 647, 419, 647, 403, 657, 405, 669, 405, 682, 404,
        692, 399, 701, 392, 705, 381, 705, 368, 711, 371, 715, 386, 715, 404,
        715, 429, 714, 449, 713, 467, 714, 485, 718, 505, 709, 498, 703, 505,
        699, 517, 697, 511,
      ], // Example coordinates
      href: "#",
      alt: "hamstrings",
    },
    {
      name: "calvesb",
      shape: "poly",
      coords: [
        563, 507, 563, 516, 562, 525, 558, 534, 553, 546, 549, 559, 547, 574,
        547, 589, 545, 605, 544, 635, 544, 650, 542, 673, 542, 692, 545, 699,
        552, 701, 559, 700, 566, 697, 569, 690, 571, 681, 575, 672, 570, 660,
        565, 656, 571, 632, 578, 617, 583, 608, 587, 601, 593, 589, 594, 575,
        594, 558, 598, 536, 592, 516, 585, 509, 583, 519, 575, 499, 568, 503,
      ], // Example coordinates
      href: "#",
      alt: "calvesb",
    },
    {
      name: "calvesb",
      shape: "poly",
      coords: [
        713, 636, 706, 623, 699, 611, 693, 598, 688, 585, 687, 568, 688, 555,
        685, 537, 691, 520, 697, 511, 700, 520, 706, 502, 707, 498, 718, 504,
        718, 520, 723, 535, 731, 550, 734, 579, 738, 618, 739, 650, 739, 676,
        739, 690, 737, 697, 728, 700, 719, 698, 713, 692, 709, 679, 707, 667,
        711, 660, 718, 657,
      ], // Example coordinates
      href: "#",
      alt: "calvesb",
    },
    {
      name: "tricepb",
      shape: "poly",
      coords: [
        533, 229, 539, 211, 543, 200, 550, 195, 557, 190, 564, 188, 569, 187,
        572, 197, 574, 205, 577, 216, 574, 227, 572, 237, 567, 248, 560, 258,
        553, 267, 543, 266, 543, 258, 547, 244, 547, 235, 544, 233, 539, 238,
        538, 247, 537, 257, 533, 266, 528, 257, 528, 244,
      ], // Example coordinates
      href: "#",
      alt: "tricepb",
    },
    {
      name: "tricepb",
      shape: "poly",
      coords: [
        707, 221, 711, 236, 716, 248, 723, 258, 728, 265, 738, 268, 738, 259,
        735, 246, 735, 238, 738, 233, 742, 238, 743, 249, 745, 261, 748, 267,
        752, 258, 755, 250, 752, 236, 748, 222, 740, 208, 735, 198, 728, 190,
        721, 189, 712, 186, 707, 205,
      ], // Example coordinates
      href: "#",
      alt: "tricepb",
    },
    {
      name: "forearms",
      shape: "poly",
      coords: [
        485, 355, 491, 342, 494, 328, 498, 312, 504, 296, 512, 280, 519, 271,
        527, 256, 533, 269, 536, 263, 537, 251, 540, 241, 544, 232, 548, 240,
        545, 249, 543, 261, 543, 268, 551, 268, 551, 280, 544, 297, 532, 315,
        520, 332, 510, 351, 505, 359, 493, 360,
      ], // Example coordinates
      href: "#",
      alt: "forearms",
    },
    {
      name: "forearms",
      shape: "poly",
      coords: [], // Example coordinates
      href: "#",
      alt: "775,358,768,341,761,329,752,317,745,307,739,300,734,289,732,281,729,267,738,267,738,255,735,244,737,232,741,236,744,250,747,265,749,267,755,254,764,269,777,294,786,319,791,340,797,354,787,358",
    },
    {
      name: "forearms",
      shape: "poly",
      coords: [
        775, 358, 768, 341, 761, 329, 752, 317, 745, 307, 739, 300, 734, 289,
        732, 281, 729, 267, 738, 267, 738, 255, 735, 244, 737, 232, 741, 236,
        744, 250, 747, 265, 749, 267, 755, 254, 764, 269, 777, 294, 786, 319,
        791, 340, 797, 354, 787, 358,
      ], // Example coordinates
      href: "#",
      alt: "forearms",
    },
  ];

  return (
    <div className="image-container">
      <ImageMapper
        src={map}
        map={{
          name: "my-map",
          areas: areas,
        }}
        width={860}
        height={753}
        fillColor="#aff5f5B3"
        strokeColor="#3320FF"
        lineWidth={3}
      />
    </div>
  );
};

export default ImageMapComponent;
