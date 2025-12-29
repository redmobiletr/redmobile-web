// Phone pricing data parsed from CSV
export interface PhonePrice {
  brand: string;
  model: string;
  capacity: string;
  offer: string;
}

// Parse CSV data into array
const csvData = `brand,model,capacity,offer
"Apple","iPhone 11","64 GB","₺7.500"
"Apple","iPhone 11","128 GB","₺9.000"
"Apple","iPhone 11","256 GB","₺10.000"
"Apple","iPhone 11 Pro","64 GB","₺11.400"
"Apple","iPhone 11 Pro","256 GB","₺13.700"
"Apple","iPhone 11 Pro","512 GB","₺14.500"
"Apple","iPhone 11 Pro Max","64 GB","₺13.000"
"Apple","iPhone 11 Pro Max","256 GB","₺14.300"
"Apple","iPhone 11 Pro Max","512 GB","₺15.500"
"Apple","iPhone 12","64 GB","₺12.400"
"Apple","iPhone 12","128 GB","₺14.300"
"Apple","iPhone 12","256 GB","₺14.900"
"Apple","iPhone 12 Mini","64 GB","₺10.100"
"Apple","iPhone 12 Mini","128 GB","₺11.100"
"Apple","iPhone 12 Mini","256 GB","₺12.200"
"Apple","iPhone 12 Pro","128 GB","₺18.900"
"Apple","iPhone 12 Pro","256 GB","₺21.200"
"Apple","iPhone 12 Pro","512 GB","₺21.700"
"Apple","iPhone 12 Pro Max","128 GB","₺20.900"
"Apple","iPhone 12 Pro Max","256 GB","₺22.500"
"Apple","iPhone 12 Pro Max","512 GB","₺25.500"
"Apple","iPhone 13","128 GB","₺20.000"
"Apple","iPhone 13","256 GB","₺21.700"
"Apple","iPhone 13","512 GB","₺25.000"
"Apple","iPhone 13 mini","128 GB","₺17.500"
"Apple","iPhone 13 mini","256 GB","₺17.900"
"Apple","iPhone 13 mini","512 GB","₺19.500"
"Apple","iPhone 13 Pro","128 GB","₺29.500"
"Apple","iPhone 13 Pro","256 GB","₺30.700"
"Apple","iPhone 13 Pro","512 GB","₺35.000"
"Apple","iPhone 13 Pro","1 TB","₺36.100"
"Apple","iPhone 13 Pro Max","128 GB","₺32.700"
"Apple","iPhone 13 Pro Max","256 GB","₺35.400"
"Apple","iPhone 13 Pro Max","512 GB","₺36.400"
"Apple","iPhone 13 Pro Max","1 TB","₺39.000"
"Apple","iPhone 14","128 GB","₺25.100"
"Apple","iPhone 14","256 GB","₺26.600"
"Apple","iPhone 14","512 GB","₺29.500"
"Apple","iPhone 14 Plus","128 GB","₺27.200"
"Apple","iPhone 14 Plus","256 GB","₺29.800"
"Apple","iPhone 14 Plus","512 GB","₺30.300"
"Apple","iPhone 14 Pro","128 GB","₺38.000"
"Apple","iPhone 14 Pro","256 GB","₺39.100"
"Apple","iPhone 14 Pro","512 GB","₺43.300"
"Apple","iPhone 14 Pro","1 TB","₺45.100"
"Apple","iPhone 14 Pro Max","128 GB","₺41.700"
"Apple","iPhone 14 Pro Max","256 GB","₺43.800"
"Apple","iPhone 14 Pro Max","512 GB","₺45.100"
"Apple","iPhone 14 Pro Max","1 TB","₺50.300"
"Apple","iPhone 15","128 GB","₺32.300"
"Apple","iPhone 15","256 GB","₺35.000"
"Apple","iPhone 15","512 GB","₺38.900"
"Apple","iPhone 15 Plus","128 GB","₺35.000"
"Apple","iPhone 15 Plus","256 GB","₺36.800"
"Apple","iPhone 15 Plus","512 GB","₺39.500"
"Apple","iPhone 15 Pro","128 GB","₺46.800"
"Apple","iPhone 15 Pro","256 GB","₺49.600"
"Apple","iPhone 15 Pro","512 GB","₺50.600"
"Apple","iPhone 15 Pro","1 TB","₺54.700"
"Apple","iPhone 15 Pro Max","256 GB","₺54.100"
"Apple","iPhone 15 Pro Max","512 GB","₺57.200"
"Apple","iPhone 15 Pro Max","1 TB","₺57.300"
"Apple","iPhone 16","128 GB","₺42.300"
"Apple","iPhone 16","256 GB","₺45.000"
"Apple","iPhone 16","512 GB","₺46.100"
"Apple","iPhone 16 Plus","128 GB","₺44.100"
"Apple","iPhone 16 Plus","256 GB","₺45.200"
"Apple","iPhone 16 Plus","512 GB","₺48.000"
"Apple","iPhone 16 Pro","128 GB","₺56.700"
"Apple","iPhone 16 Pro","256 GB","₺58.800"
"Apple","iPhone 16 Pro","512 GB","₺66.300"
"Apple","iPhone 16 Pro","1 TB","₺68.200"
"Apple","iPhone 16 Pro Max","256 GB","₺66.100"
"Apple","iPhone 16 Pro Max","512 GB","₺73.400"
"Apple","iPhone 16 Pro Max","1 TB","₺76.800"
"Samsung","Galaxy S23 Ultra","256 GB","₺28.600"
"Samsung","Galaxy S23 Ultra","512 GB","₺29.600"
"Samsung","Galaxy S23 Ultra","1 TB","₺32.200"
"Samsung","Galaxy S24 Ultra","256 GB","₺40.100"
"Samsung","Galaxy S24 Ultra","512 GB","₺41.500"
"Samsung","Galaxy S24 Ultra","1 TB","₺43.100"
"Samsung","Galaxy S22 5G","128 GB","₺8.200"
"Samsung","Galaxy S21","128 GB","₺5.800"
"Samsung","Galaxy S21","256 GB","₺5.800"
"Samsung","Galaxy Note 20","256 GB","₺6.700"
"Samsung","Galaxy Note 20 Ultra","256 GB","₺11.700"
"Samsung","Galaxy Note 20 Ultra","512 GB","₺13.500"`;

function parseCSV(csv: string): PhonePrice[] {
  const lines = csv.split('\n');
  const headers = lines[0].split(',');
  const data: PhonePrice[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Simple CSV parser for quoted values
    const values: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());

    if (values.length === 4) {
      data.push({
        brand: values[0].replace(/^"|"$/g, ''),
        model: values[1].replace(/^"|"$/g, ''),
        capacity: values[2].replace(/^"|"$/g, ''),
        offer: values[3].replace(/^"|"$/g, ''),
      });
    }
  }

  return data;
}

export const phonePrices: PhonePrice[] = parseCSV(csvData);

export function getPhonePrice(
  brand: string,
  model: string,
  capacity: string
): string | null {
  const normalizedBrand = brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase();
  const normalizedCapacity = capacity.includes('GB') ? capacity : `${capacity} GB`;
  
  const price = phonePrices.find(
    (p) =>
      p.brand.toLowerCase() === normalizedBrand.toLowerCase() &&
      p.model.toLowerCase() === model.toLowerCase() &&
      p.capacity === normalizedCapacity
  );

  return price ? price.offer : null;
}

