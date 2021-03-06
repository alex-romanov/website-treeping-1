export default class StringUtil {

  static minsToHrs(data) {
    if (data) {
      const hours = Math.floor(data / 60);
      const value = data % 60;
      const minutes = value < 10 ? `0${data}` : value;
      return `${hours}:${minutes}`;
    }
    return data;
  }

  static toTitleCase(data) {
    const response = data.replace(/_/g, ' ');
    return response.replace(/\w\S*/g, txt =>
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
    );
  }

  static timeSince(data) {
    const seconds = Math.floor((new Date() - new Date(data)) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
      return `${interval} año${interval > 1 ? 's' : ''}`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return `${interval} mes${interval > 1 ? 'es' : ''}`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return `${interval} día${interval > 1 ? 's' : ''}`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return `${interval} hora${interval > 1 ? 's' : ''}`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} minutos`;
    }
    return '1 minuto';
  }

  static truncate(string, limit) {
    return (string && string.length > limit) ? `${string.substr(0, limit - 1)} ...` : string;
  }

  static getFormStatus(status) {
    if (status === 'saving') {
      return 'guardando cambios...';
    } else if (status === 'saved') {
      return 'Cambios guardados.';
    } else if (status === 'error') {
      return 'Error, favor de reportarlo.';
    } else if (status === 'deleting') {
      return 'eliminando información...';
    } else if (status === 'deleted') {
      return 'Información eliminada.';
    }
    return null;
  }

  static formatDate(date, format) {
    if (format === 'mm-dd-YYYY') {
      const bits = date.toJSON().split('T')[0].split('-');
      return `${bits[1]}-${bits[2]}-${bits[0]}`;
    }
    return date;
  }
}
